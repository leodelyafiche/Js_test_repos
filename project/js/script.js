/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "hui",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1 задание
let promo = document.querySelectorAll('.promo__adv img');
console.log(promo);

promo.forEach(function(promoImage){
    promoImage.remove();
});

// 2 задание

let promoGenre = document.querySelector('.promo__genre');
let clovun =  'Кловуны';
promoGenre.textContent = clovun;

// 3 задание

let promoPoster = document.querySelector('.promo__bg');
promoPoster.style.background = 'url("../img/bg.jpg") center center/cover no-repeat';

// 4 задание
movieDB.movies.sort();
const filmList = document.querySelectorAll('.promo__interactive-list li');
    for (let i = 0; i < movieDB.movies.length; i++) {
        filmList[i].textContent = `${i+1} ${movieDB.movies[i]}`;
    }




// let filmList = document.querySelectorAll('.promo__interactive-list li');

// filmList.forEach(function(filmName){
//     filmList.textContent = movieDB.movies[i];
// });