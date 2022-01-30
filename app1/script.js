"use strict";
let numberOfFilms = +prompt("Сколько фильмов посмотрел?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count < 10){
    alert("Посмотри больше фильмов");
} else if (10 <= personalMovieDB.count && personalMovieDB.count < 30){
    alert("Вы норм смотрите");
} else if (personalMovieDB.count >= 30){
    alert("Много смотришь, вырубай");
}

let lastViewedFilm,
    filmMark;
    
for (let i = 0; i != personalMovieDB.count; i++){   
    
do {
    lastViewedFilm = prompt("Один из последних фильмов?");
} while ( (lastViewedFilm == "") || (lastViewedFilm == undefined) || (lastViewedFilm.length > 50) );

filmMark = +prompt("Оцените");

personalMovieDB.movies[lastViewedFilm] = filmMark;

}

alert("2");

console.log(personalMovieDB);
