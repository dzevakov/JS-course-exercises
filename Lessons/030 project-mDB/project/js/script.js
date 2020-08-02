/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

// const bg = document.getElementsByClassName('promo__bg');
// bg[0].style.backgroundImage = "url('../img/bg.jpg')";

//get list elements.
const list = document.getElementsByClassName('promo__interactive-item'); 

// conver to normal array.
const filmList = [];
Object.keys(list).forEach( key => {
    filmList.push(list[key].textContent);
});

// sort array
filmList.sort();

//write sorted data to list on HTML page
Object.keys(list).forEach(key => {
   list[key].textContent = filmList[key];
});

// let element = document.getElementsByClassName('promo__interactive-list');
// console.log(element[0].tagName);

// const attrib = element[0].attributes;
// console.log(attrib.length);

// const elementNew = document.createElement('ol');
// element[0].parentElement.insertBefore(elementNew, element[0]);
// elementNew.classList = element[0].classList;

// const childNodesE = element[0].childNodes;
// Object.keys(childNodesE).forEach(item => {
//     elementNew.appendChild(childNodes[item]);
// });

// for (let i = 0; i < element[0].attributes.lengtht; ++i) {
//     elementNew.setAttribute(element[0].attributes[i].name, element[0].attributes[i].value);
// }


// element[0].parentElement.removeChild(element[0]);

// element = document.getElementsByClassName('promo__interactive-list');
// console.log(element[0].tagName);


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


