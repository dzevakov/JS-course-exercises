
const express = require('express');
const app = express();
const port = 3000;

const fs = require("fs");

app.use(express.json()) ;// for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  	
let fileContent = fs.readFileSync("public/db.txt", "utf8");
  res.send(JSON.parse(fileContent));
});

app.post('/dar', (req, res) => {
    console.log(req.body);
    res.json(req.body);
  });

app.post('/', function (req, res, next) {
  // console.log(req.body);

  fs.writeFileSync("public/db.txt", JSON.stringify(resultResponse));
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const resultResponse = {
  "menu": [
    {
      "img": "img/tabs/vegy.jpg",
      "altimg": "vegy",
      "title": "Меню 'Фитнес'",
      "descr": "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",
      "price": 9
    },
    {
      "img": "img/tabs/post.jpg",
      "altimg": "post",
      "title": "Меню 'Постное'",
      "descr": "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
      "price": 14
    },
    {
      "img": "img/tabs/elite.jpg",
      "altimg": "elite",
      "title": "Меню 'Премиум'",
      "descr": "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
      "price": 21
    }
  ]
};

let resultRequest = {
  "request": [

  ]
};