function right(board){
  const newBoard = [...board]
  let size = newBoard.length
  let score = 0
  for(let row = 0; row < size; row++){
    for(let col = size-1; col >= 0; col--){
      if(newBoard[row][col] !== 0 && newBoard[row][col] === newBoard[row][col-1]){
          newBoard[row][col] *= 2
          newBoard[row][col-1] = 0
          score += newBoard[row][col]
      }
    }
  }
  return {newBoard,score}
}

function moveRight(board) {
  const size = board.length;

  for (let row = 0; row < size; row++) {
    let current = size - 1; // Index to track the current position to move the elements

    for (let col = size - 1; col >= 0; col--) {
      if (board[row][col] !== 0) {
        if (col !== current) {
          board[row][current] = board[row][col];
          board[row][col] = 0;
        }
        current--;
      }
    }
  }

  return board;
}

function left(board){
  const newBoard = [...board]
  let size = newBoard.length
  let score = 0
  for(let row = 0; row < size; row++){
    for(let col = 0; col < size; col++){
      if(newBoard[row][col] !== 0 && newBoard[row][col] === newBoard[row][col+1]){
          newBoard[row][col] *= 2
          newBoard[row][col+1] = 0
          score += newBoard[row][col]
      }
    }
  }
  return {newBoard,score}
}

function moveLeft(board) {
  const size = board.length;

  for (let row = 0; row < size; row++) {
    let current = 0; // Index to track the current position to move the elements

    for (let col = 0; col < size; col++) {
      if (board[row][col] !== 0) {
        if (col !== current) {
          board[row][current] = board[row][col];
          board[row][col] = 0;
        }
        current++;
      }
    }
  }

  return board;
}


function moveDown(board) {
  const size = board.length;

  // Iterate over each column
  for (let col = 0; col < size; col++) {
    for (let row = size - 2; row >= 0; row--) {
      if (board[row][col] !== 0) {
        let currentRow = row;

        // Move tile downwards as far as possible
        while (currentRow < size - 1 && board[currentRow + 1][col] === 0) {
          board[currentRow + 1][col] = board[currentRow][col];
          board[currentRow][col] = 0;
          currentRow++;
        }
      }
    }
  }

  return board;
}


function down(board) {
  const newBoard = [...board]
  const size = newBoard.length;
  let score = 0

  // Iterate over each column
  for (let col = 0; col < size; col++) {
    for (let row = size - 2; row >= 0; row--) {
      if (newBoard[row][col] !== 0) {
        let currentRow = row;
        if (currentRow < size - 1 && newBoard[currentRow + 1][col] === newBoard[currentRow][col]) {
          newBoard[currentRow + 1][col] *= 2;
          newBoard[currentRow][col] = 0;
          score += newBoard[currentRow+1][col]
        }
      }
    }
  }

  return {newBoard,score}
}


function up(board) {
  
  const newBoard = [...board]
  const size = newBoard.length;
  let score = 0

  // Iterate over each column
  for (let col = 0; col < size; col++) {
    for (let row = 1; row < size; row++) {
      if (newBoard[row][col] !== 0) {
        let currentRow = row;

        if (newBoard[currentRow - 1][col] === newBoard[currentRow][col]) {
          newBoard[currentRow - 1][col] *= 2;
          newBoard[currentRow][col] = 0;
          score += newBoard[currentRow-1][col]
        }
      }
    }
  }

  return {newBoard,score}
}


function moveUp(board) {
  const size = board.length;

  // Iterate over each column
  for (let col = 0; col < size; col++) {
    for (let row = 1; row < size; row++) {
      if (board[row][col] !== 0) {
        let currentRow = row;

        // Move tile downwards as far as possible
        while (currentRow > 0 && board[currentRow - 1][col] === 0) {
          board[currentRow - 1][col] = board[currentRow][col];
          board[currentRow][col] = 0;
          currentRow--;
        }
      }
    }
  }

  return board;
}

module.exports = {
    up,
    moveUp,
    down,
    moveDown,
    right,
    moveRight,
    left,
    moveLeft,
}