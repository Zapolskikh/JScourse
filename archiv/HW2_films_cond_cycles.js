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

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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
console.log(personalMovieDB);  

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