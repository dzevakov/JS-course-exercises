const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json()) ;// for parsing application/json
app.use(cors());

app.options('http://localhost:90/', cors());

app.get('/', cors(), (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});