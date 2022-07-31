/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

// Код возьмите из предыдущего домашнего задания

//1)

'use strict';


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(numberOfFilms =='' || numberOfFilms ==null || isNaN(numberOfFilms)) {  //isNaN - метод, возвращает true когда не число
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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


function remeberMyFilms() {
    for (let i = 1; i<=numberOfFilms; i++){     //условие, сравнение, шаг.
        let nameOfFilm = prompt('Один из последних просмотренных фильмов?', '');
        
            
         if (nameOfFilm.length >5 || nameOfFilm =="" || nameOfFilm == null ){
            alert('Давай по новой, дружок, без пустых срок и следи за размахом. Не нужно писать описание фильма, только НАЗВАНИЕ');
            personalMovieDB.movies = {};
             
            i=0; 
         }
        else{
            let score = prompt('На сколько оцените его?', '');
            personalMovieDB.movies[nameOfFilm] = score;
        }
    }
}
remeberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }
    else if (personalMovieDB.count > 30) {
        alert("Вы классический зритель");
    }
    else if (personalMovieDB.count>=10 && personalMovieDB.count<=30){
        alert("Вы киноман");
    }
    else {
        alert("Error");
    }
}
detectPersonalLevel();

function showMyDB(){
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
    else {
        return 0;
    }
}
showMyDB();

function writeYourGenres() {
    for (let i=0; i<3; i++){     //условие, сравнение, шаг.
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером${i+1}`, '');
    }
}
writeYourGenres();