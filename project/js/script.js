/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "hui",
        "Одержимость",
        "Скотт Пилигрим против...",
        
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
promoPoster.style.background = 'url("bg.jpg") center center/cover no-repeat';

// 4 задание
movieDB.movies.sort();
let filmList = document.querySelectorAll('.promo__interactive-list li');

installFilms();//вывод фильмов из js массива в li 

let inputFilm = document.querySelector('.adding__input');
let ulList = document.querySelector('.promo__interactive-list');


let inputButton = document.querySelector('.promo__interactive .add button');
inputButton.addEventListener("click" ,() => {

    movieDB.movies.push(inputFilm.value); //пушим из инпута в массив в JS
    let listElement = document.createElement('li'); // объявляем новый элемент li
    listElement.className = "promo__interactive-item"; //класс для li
    listElement.textContent = ""; //заполнение li
    ulList.append(listElement);  //вставляем li в конец списка(append, before, after)
    filmList = document.querySelectorAll('.promo__interactive-list li');//обновляем запрос
    movieDB.movies.sort(); //сортировка
    installFilms();
    let favFilmCheck = document.querySelector('input[type="checkbox" i]');//4 zadanie
    if (favFilmCheck.checked) {
        console.log('Добавляем любимый фильм');
    }
});

let baskets = document.querySelectorAll('.delete');

for (let i = 0; i < baskets.length; i++){
//    filmList.splice(i, 1);
    
    baskets[i].addEventListener("click" ,() => {
        // delete movieDB.movies[i];
        movieDB.movies.splice(i,1);
        baskets[i].closest(".promo__interactive-item").remove();
       

    });
}



// baskets.closest(".promo__interactive-item"); 

function installFilms() {
    for (let i = 0; i < movieDB.movies.length; i++) {
        if (movieDB.movies[i].length > 21) { //проверка длины введенного фильма
            movieDB.movies[i] = movieDB.movies[i].substring(0, 20); //обрезаем строку, если название больше 21 сим
            movieDB.movies[i] = movieDB.movies[i] + '...';
        }     
        filmList[i].textContent = `${i + 1} ${movieDB.movies[i]}`;
        filmList[i].insertAdjacentHTML('beforeend', '<div class="delete"></div>');
    }
}
// let filmList = document.querySelectorAll('.promo__interactive-list li');

// filmList.forEach(function(filmName){
//     filmList.textContent = movieDB.movies[i];
// });