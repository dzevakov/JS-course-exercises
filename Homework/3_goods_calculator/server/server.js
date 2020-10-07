"use strict";

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

const fs = require("fs");

app.use(express.json()) ;// for parsing application/json
app.use(cors());

// var corsOptions = {
//     origin: 'http://localhost:90/',
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//   };

app.options('http://localhost:90/', cors());

app.get('/', cors(), (req, res) => {
  	    let fileContent = fs.readFileSync("../public/state.txt", "utf8");
      res.send(JSON.parse(fileContent));
});

app.post('/', cors(), function (req, res, next) {
    fs.writeFileSync("../public/state.txt", JSON.stringify(req.body));
    res.send(req.body);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});