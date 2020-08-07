/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const bg = document.getElementsByClassName('promo__bg');
bg[0].style.backgroundImage = "url('../project/img/bg.jpg')";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const sortFilmList = (movieDataBase) => {
    //get list elements.
    const list = document.getElementsByClassName('promo__interactive-item'); 

    // sort array & write sorted data to list on HTML page
    movieDataBase.movies.sort();
    for (let i= 0; i < movieDB.movies.length; i++) {
        list[i].innerHTML = `${i+1}. ${movieDB.movies[i]} \n <div class="delete"></div>`;
    }
};

const addFilm = (filmNew) => {
    if (filmNew.length >= 21) {
        filmNew = `${filmNew.slice(0, 21)} ...`;
    }

    movieDB.movies.push(filmNew);
   
    const filmNewTag = document.createElement('li');
    filmNewTag.innerHTML = `${filmNew} \n <div class="delete"></div>`;
    filmNewTag.className = 'promo__interactive-item';
   
    const filmList = document.getElementsByClassName('promo__interactive-list');
    filmList[0].append(filmNewTag);
   
    sortFilmList(movieDB);
};

const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    event.preventDefault();
    const addInput = document.querySelector('.adding__input');
    const filmNew = addInput.value;
    addFilm(filmNew);

    const check = document.getElementsByTagName('input');
    if (check[2].checked) {
        console.log('Добавляем любимый фильм');
        alert('Добавляем любимый фильм');
    }

    addInput.value = '';
    check[2].checked = false;
});

const deleteFilm = document.getElementsByClassName('delete');
Object.keys(deleteFilm).forEach(key => {
    deleteFilm[key].addEventListener('click', (event) => {
       
        movieDB.movies.splice(key, 1);
        console.log(movieDB.movies);
        
        event.target.closest('li').remove();

        sortFilmList(movieDB);
    });
});