'use strict';
const box = document.getElementById('box'); //нахождение элемента по ийди
console.log(box);

const buttons = document.getElementsByTagName('button'); //все кнопки //html collections// всегда массив, даже если один элемент!!
const bttons = document.getElementsByTagName('button')[2]; //вторую кнопку только, с ней можно работать
console.log(buttons);

const circles = document.getElementsByClassName('circle'); //tak zhe html collectioon array
console.log(circles);

//современные способы
const hearts = document.querySelectorAll('.heart'); //css selector //. ставится потому что класс! //умеет forEach
console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart'); //выберет только первый элемент