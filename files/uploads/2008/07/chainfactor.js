// Call init() when the page is done loading
$(init);

// Number of rows and columns
var boardSize = 7;

// Size of each cell, in pixels
var cellSize = 44;

// Value for next ball
var nextBallValue = Math.ceil(Math.random()*boardSize);

// If a previous move is still processing
var processingMove = false;

function init() {
	// Create the game board div
	var div = $("<div id='gameBoard'></div>");
	
	// Create each column
	for(var i = 0; i < boardSize; i++) {
		var col = $("<div class='column'></div>");
		col.width(cellSize);
		if(i == 0) col.addClass("firstColumn");
		
		var nextUpHover = $("<div class='nextUpHover'></div>");
		nextUpHover.height(cellSize);
		nextUpHover.width(cellSize);
		col.append(nextUpHover);
		
		// Create each cell within the column
		for(var j = 0; j < boardSize; j++) {
			var cell = $("<div class='cell'></div>");
			cell.height(cellSize);
			cell.width(cellSize);
			col.append(cell);
		}
		
		// Bind the function that handles a ball "drop"
		col.bind("click", dropBall);
		
		// Bind the function that will show the hovering "next ball" above the column
		col.bind("mouseover", hoverNextBall);
		
		// Bind the function that will REMOVE the hovering "next ball" above the column
		col.bind("mouseout", removeNextBall);
		
		
		div.append(col);
	}
	
	$(document.body).append(div);
}


function hoverNextBall() {
	$(".nextUpHover", this).addClass("ball" + nextBallValue);
}

function removeNextBall() {
	$(".nextUpHover", this).removeClass("ball" + nextBallValue);
}


// Drop a ball into the grid
function dropBall() {
	// Make sure we've finished processing the previous move
	if(processingMove) return true;
	
	processingMove = true;
	
	// Find the top empty cell in this column
	var dropCell = findNextEmptyCell(this);
	
	// If we found a spot to drop the ball, put it there
	if(dropCell != false) {
		dropCell.addClass("fullCell");
		dropCell.attr("ballValue", nextBallValue);
		dropCell.addClass("ball" + nextBallValue);
		
		// Remove the old "hover" above the column
		$(".nextUpHover", this).removeClass("ball" + nextBallValue);
		
		// Next ball value will be from 1 to boardSize - max value for a ball is the number of rows and columns
		nextBallValue = Math.ceil(Math.random()*boardSize);
		
		// Update the hovering ball at the top of the column
		$(".nextUpHover", this).addClass("ball" + nextBallValue);
		
		// Check if any balls on the board need to be cleared
		checkForClearedBalls();
	}
	// No empty spot in this column to drop a ball in, so the move is over
	else {
		processingMove = false;
	}
	
	return true;
}


// Check all balls on the board to see which ones need to be cleared
function checkForClearedBalls() {
	// Keep track of whether or not any of them need to be cleared
	var hasClears = false;
		
	// Check every cell on the board to see if it should be cleared
	$(".fullCell").each(function() {
		if(checkForClear(this)) {
			hasClears = true;
		}
	});

	// If any balls need to be cleared, do so.  The timeout is so they will be displayed for a moment with
	// the styling that indicates they are about to be cleared, so the user can follow what is being cleared where
	if(hasClears) {
		setTimeout("clearBalls()", 500);
	}
	// Nothing to clear, move is over
	else {
		processingMove = false;
	}
}

// Actually remove any balls that need to be cleared
function clearBalls() {
	// Check every ball on the board, and clear it if the clear flag is set
	$(".fullCell").each(removeClearedBalls);
	// Shift down any balls to fill in openings
	shiftBallsDown();
	// Re-run the check to see if any more balls need to be cleared after shifting 
	checkForClearedBalls();
}


// Find the next empty cell in the given column.  Used to drop a ball, and to shift balls down after clearing
function findNextEmptyCell(col) {
	// Get all the cells in this column
	var cells = $(".cell", col);
	// Start with the highest index - the lowest cell in the DOM
	var checkIndex = cells.length - 1;
	var dropCell = false;
	
	// Loop over all the cells to find the first one without a ball in i
	while(checkIndex >= 0 && dropCell == false) {
		dropCell = $(cells.get(checkIndex));
		// If it has the fullCell class, there's a ball here
		if(dropCell.hasClass("fullCell")) {
			// Unset the object and decrement index
			checkIndex--;
			dropCell = false;
		}
	}
	return dropCell;
}


// Check the given div on the board and determine if it qualifies to be removed
// Returns true if the ball in the given div needs to be cleared, false if it doesn't
function checkForClear(div) {
	var me = $(div)
	
	// Reset the "clear" flag
	me.attr("clear", 0);
	
	// Find out the value of the ball in this div
	var cellValue = me.attr("ballValue");
	
	// If the number of balls adjacent to this one (vertically or horizontally) is equal
	// to the value of this ball, then clear this ball
	if(getNumberOfBallsInRow(div) == cellValue || getNumberOfBallsInColumn(div) == cellValue) {
		// Set the clear flag
		me.attr("clear", 1);
		
		// Change the style of the div to indicate that it's being cleared
		me.addClass("clearCell");
		me.removeClass("ball" + me.attr("ballValue"));
		
		// DOES need to be cleared, so return true
		return true;
	}
	// Does not need to be cleared
	else {
		return false;
	}
}


// Clear balls that have been deemed clear-able
function removeClearedBalls() {
	var me = $(this)
	
	// Only clear this cell if it should be cleared
	if(me.attr("clear") > 0) {
		// Reset values
		me.removeClass("fullCell");
		me.removeClass("clearCell");
		me.attr("ballValue", 0);
		me.attr("clear", 0);
	}
}


// For every ball on the board, shift it down if there are empty cells below it
function shiftBallsDown() {
	// Loop over every column
	$(".column").each(function() {
		// Get all the balls in this column
		var balls = $(".fullCell", this);
		// Loop over the balls, starting with the lowest one
		for(var i = balls.length - 1; i >= 0; i--) {
			var shiftingBall = balls.get(i);
			// Get the lowest empty spot in this column
			var emptyCell = $(findNextEmptyCell(this));
			if(emptyCell != false) {
				// If the empty spot is below the ball, move the ball into it
				if(getRowIndex(shiftingBall) < getRowIndex(emptyCell[0])) {
					// Clone the empty cell
					var emptyClone = emptyCell.clone(true);
					// Replace the empty cell with a clone of the ball
					emptyCell.replaceWith($(shiftingBall).clone(true));
					// Replace the ball with the clone of the empty cell
					$(shiftingBall).replaceWith(emptyClone);
				}
			}
		}
	});
}


// Find the row index of the given div by figuring out where it falls in the parent column div
function getRowIndex(div) {
	return $(".cell", $(div).parent()).index(div);
}

// Find the column index of a given div by finding its parent div (the column) in the game board
function getColumnIndex(div) {
	var parent = $(div).parent();
	return $(".column", parent.parent()).index(parent[0]);
}

// Find the number of consecutive balls in a row by checking adjacent columns
function getNumberOfBallsInRow(div) {
	var gameBoard = $(div).parent().parent();
	
	var col = getColumnIndex(div);
	var row = getRowIndex(div);
	
	var ballsInRow = 1;
	
	// Start to the left
	if(col > 0) {
		for(var i = col-1; i >= 0; i--) {
			// Get a reference to the next column over
			var adjacentCol = $($(".column", gameBoard).get(i));
			// Get a reference to the cell next to the one in question - so, the cell in the proper row
			var adjacentCell = $($(".cell", adjacentCol).get(row));
			
			// If the cell is full, increment the number of consecutive cells
			if(adjacentCell.hasClass("fullCell")) {
				ballsInRow++;
			}
			// If the cell is empty, stop counting
			else {
				break;
			}
		}
	}
	
	// Then check to the right
	if(col < (boardSize - 1)) {
		for(var i = col+1; i < boardSize; i++) {
			// Get a reference to the next column over
			var adjacentCol = $($(".column", gameBoard).get(i));
			// Get a reference to the cell next to the one in question - so, the cell in the proper row
			var adjacentCell = $($(".cell", adjacentCol).get(row));
			
			// If the cell is full, increment the number of consecutive cells
			if(adjacentCell.hasClass("fullCell")) {
				ballsInRow++;
			}
			// If the cell is empty, stop counting
			else {
				break;
			}
		}
	}
	
	return ballsInRow;
}

// Finding the number of balls in a column is easy - get all the full cells in the column
function getNumberOfBallsInColumn(div) {
	var parent = $(div).parent();
	return $(".fullCell", parent).length;
}