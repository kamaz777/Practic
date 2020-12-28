"use strict";

const personalMovieDB = {
    count: 0, 
    movies: {}, 
    actors: {}, 
    genres: [],
    privat: false, 
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    detectPersonalLevels: function() {
        if (personalMovieDB.count < 10 && personalMovieDB.count != null) {
            alert("Посмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10) {
            alert("Вы классический зритель");
        } else {
            alert("Произошла ошибка");
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", "");
            let b = +prompt("На сколько оцените его?", "");
            if (a != null && b != null && a != '' && b != '' && a.length <= 50 && !(isNaN(b))) {
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        } 
    },
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 0; i < 1; i++) {
            let a = prompt("Введите ваши любимые жанры через запятую", "").toLowerCase();
            if (a != null &&  a != '') {
                personalMovieDB.genres = a.split(", ");
                personalMovieDB.genres.sort();
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach ((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`);
            }
        );
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
//personalMovieDB.start();
//personalMovieDB.detectPersonalLevels();
//personalMovieDB.rememberMyFilms();

//personalMovieDB.toggleVisibleMyDB();
//personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
