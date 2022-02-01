"use strict";
let lastViewedFilm,
    filmMark;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов посмотрел?");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов посмотрел?");
        }
    },

    writeYourGenres: function(){
        for (let i = 0; i < 3; i++){
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            while (personalMovieDB.genres[i] == "" || personalMovieDB.genres[i] == null) {
                personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
        }

        personalMovieDB.genres.forEach(function callback(item, number, _genres) {
            console.log(`любимый жанр № ${number+1} - это ${item}`);
        });

    },

    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert("Посмотри больше фильмов");
        } else if (10 <= personalMovieDB.count && personalMovieDB.count < 30) {
            alert("Вы норм смотрите");
        } else if (personalMovieDB.count >= 30) {
            alert("Много смотришь, вырубай");
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i != personalMovieDB.count; i++) {
    
            do {
                lastViewedFilm = prompt("Один из последних фильмов?");
            } while ((lastViewedFilm == "") || (lastViewedFilm == undefined) || (lastViewedFilm.length > 50));
    
            filmMark = +prompt("Оцените");
    
            personalMovieDB.movies[lastViewedFilm] = filmMark;
    
        }
    },

    showMyDB: function(){
        if (personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } 
    },

    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    



};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();



















