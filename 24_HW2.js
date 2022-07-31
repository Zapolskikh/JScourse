/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
    },
    actors: {
    },
    genres: [],
    privat: false
};

while (true) {
    if (numberOfFilms === 0) {
        alert('Советую посомтреть хотя бы один фильм');
        break;
    }
    else if (numberOfFilms > 0) {
        goAgain: for (let i = 1; i <= numberOfFilms; i++) {
            const lastMovie = prompt('Один из последних просмотренных фильмов', '');
            const score = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[lastMovie] = score;
            if (lastMovie === '' || lastMovie.length > 50) {
                i=1;
                continue goAgain;
            }
        }
        break;
    }
    else {
        alert('Задайте число фильмов или откажитесь');
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

if (0<personalMovieDB.count<10) {
    alert("Просмотрено довольно мало фильмов");
}
else if (10<personalMovieDB.count<30) {
    alert("Вы классический зритель");
}
else {
    alert("Вы киноман");
}

console.log(personalMovieDB);


