/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

alert(1);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(numberOfFilms =='' || numberOfFilms ==null || isNaN(numberOfFilms)) {  //isNaN - метод, возвращает true когда не число
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }    
    },
    remeberMyFilms: function(){
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

    },
    showMyDB: function(){
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
        else {
            return 0;
        }
    },
    detectPersonalLevel: function(){
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
    },
    writeYourGenres: function(){
        for (let i=0; i<3; i++){     //условие, сравнение, шаг.
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером${i+1}`, '');
        }
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat;
        console.log(personalMovieDB.privat);
    }
};

personalMovieDB.start();
personalMovieDB.remeberMyFilms();
personalMovieDB.showMyDB();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();