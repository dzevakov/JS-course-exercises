
const express = require('express');
const app = express();
const port = 3000;

// app.use(express.json()) ;// for parsing application/json
// app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.json(req.body);
//   });

// app.post('/dar', function (req, res, next) {
//   console.log(req.body)
//   res.json(req.body)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

