# Tic-Tac-Toe
Tic-Tac-Toe is a tic-tac-toe game built with Plain JavaScript on top of Node.js.


## To run the game locally

1. Clone or Folk this repo `https://github.com/GustaveRw/Tic-Tac-Toe`
2. `cd Tic-Tac-Toe`
3. Run `npm install`
4. Run `npm start`
5. Visit `http://localhost:3000/` to play tic-tac-toe locally


# Tic-Tac-Toe API
Players can also interact with the game by making API post requests to the server and the game will return a tic-tac-toe board with the computer's move.

### How To get started

1. Download the files, navigate to tic-tac-toe folder in terminal, and npm install & start the server
2. Play against the computer by sending post requests to http://localhost:3000/api


#### Gameplay

- Player 1 is represented by "X" and Player 2 is represented by "O".
- If an empty array is sent to the server, the computer will be Player 1.
- If an array with a single 'X' and 8 empty strings is sent to the server, the computer will be Player 2.
- The game is designed so the computer never loses a game and will always make the most optimal move.

#### API Post Request
To play a game, send a post request to  http://localhost:3000/api with 'board' as the key and the array as the value.
- Example: {'board': '["","","","","","","","",""]'}

The server will respond with a board that includes the computers move:
- Example Post Request: {'board': '["X","","","","","","","",""]'}
- Subsequent Response: {'board': '["X","","","","O","","","",""]'}

Additionally, a post request can be made to http://localhost:3000/api/move using the same format and the server will respond with the optimal next move to make (respresented as the index position in the board array).
