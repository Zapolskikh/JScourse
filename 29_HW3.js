/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


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

console.log (personalMovieDB);


function rememberMyFilms(){
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
}
rememberMyFilms();


function detectPersonallevel(){
if (0<personalMovieDB.count<10) {
    alert("Просмотрено довольно мало фильмов");
}
else if (10<personalMovieDB.count<30) {
    alert("Вы классический зритель");
}
else {
    alert("Вы киноман");
}
}
detectPersonallevel();



function showMyDB(){
    if (personalMovieDB.privat === false){
      console.log(personalMovieDB);
    }
    else{
        alert('база фильмов закрыта для публичного доступа');
    }
}
showMyDB();

function writeYourGenres(){
    for (let i = 0; i < numberOfFilms; i++) {

     personalMovieDB.genres[i] = prompt(`"Ваш любимый жанр под номером ${i+1}`);
        
    }
   return personalMovieDB.genres;
}
writeYourGenres();


