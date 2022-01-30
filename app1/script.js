"use strict";
let numberOfFilms,
    lastViewedFilm,
    filmMark;

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
};


// detectPersonalLevel();
// rememberMyFilms();
writeYourGenres();
showMyDB();








function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
    }
}

function start() {
    numberOfFilms = +prompt("Сколько фильмов посмотрел?");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов посмотрел?");
    }
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert("Посмотри больше фильмов");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
        alert("Вы норм смотрите");
    } else if (personalMovieDB.count >= 30) {
        alert("Много смотришь, вырубай");
    }
}

function rememberMyFilms() {
    for (let i = 0; i != personalMovieDB.count; i++) {

        do {
            lastViewedFilm = prompt("Один из последних фильмов?");
        } while ((lastViewedFilm == "") || (lastViewedFilm == undefined) || (lastViewedFilm.length > 50));

        filmMark = +prompt("Оцените");

        personalMovieDB.movies[lastViewedFilm] = filmMark;

    }
}

function showMyDB(){
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } 
}

