"use strict";
let numberOfFilms = +prompt("Сколько фильмов посмотрел?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastViewedFilm = prompt("Один из последних фильмов?"),
    filmMark = +prompt("Оцените");
personalMovieDB.movies[lastViewedFilm] = filmMark;

lastViewedFilm = prompt("Один из последних фильмов?");
filmMark = +prompt("Оцените");
personalMovieDB.movies[lastViewedFilm] = filmMark;

console.log(personalMovieDB);

// alert(personalMovieDB.movies.lastViewedFilm + ':' + personalMovieDB.movies.filmMark);
