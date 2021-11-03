
let numberOfFilms = +prompt("how many films have you watched?","");
console.log("Number of films is " ,numberOfFilms);


const personalMovieDB = {
    count: numberOfFilms,
    movies:{
    },
    actors:{},
    genres:[],
    privat: false
};


const a = prompt("последний фильм","");
const b = prompt("оценка","");
const c = prompt("последний фильм 2","");
const d = prompt("оценка 2","");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


console.log (personalMovieDB);

