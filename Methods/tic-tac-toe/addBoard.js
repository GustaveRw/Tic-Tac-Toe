"use strict";

const currentTurn = require('./currentTurn');



function addBoard(board, position){
	let move = currentTurn(board);
	let newBoard = [];

	for (let i = 0; i < board.length; i++){
		if(i === position) {
			newBoard.push(move);
		} else {
			newBoard.push(board[i]);
		}
	}

	return newBoard;

}

module.exports = addBoard;