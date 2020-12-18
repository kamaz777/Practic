"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms, 
    movies: {}, 
    actors: {}, 
    genres: [],
    privat: false
};

function detectPersonalLevels() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != null) {
        alert("Посмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
        alert("Вы классический зритель");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevels();

function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов?", "");
        let b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    } 
}

rememberMyFilms();

function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}
showMyDB();

function writeYourGenres () {
    for (let i = 0; i < 3; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i+1}?`, "");
        if (a != null &&  a != '') {
            personalMovieDB.genres[i] = a;
        } else {
            i--;
        }
    } 
}
writeYourGenres();