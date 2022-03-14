const express = require("express");
const req = require("express/lib/request");

const Api = express();
Api.listen(3000, ()=> {
    console.log("API is up and running");
});

Api.get('/', (req, res) => {
    console.log(req);
    res.send("Tic Tac Toe");
});