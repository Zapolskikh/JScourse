'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector('heart');

console.dir(box); // смотрим жлемент в качестве обьекта
box.style.backgroundColor ="blue"; //используем свойство бьекта
box.style.width = '500px';
//работаем с инлайн стилями, они всегда перебивают css стили, высший приоритет.

btns[1].style.borderRadius = '100%';
//circles.style.backgroundColor = 'red'; // не работает, потому что мы обращаемся к целому массиву!!
circles[0].style.backgroundColor = 'red'; 

//neskolko stiley
const num = 600;
box.style.cssText = 'background-color: blue; width: 500px'; //пишем в css языке
box.style.cssText = `background-color: blue; width: ${num}px`; //можно вставлять переменные

//изменяем нескольок пободных элементов
for(let i = 0; i< hearts.length; i++){
    hearts[i].style.backgroundColor= 'green';
}
////изменяем нескольок пободных элементов forEach
hearts.forEach(item =>{
item.style.backgroundColor = 'blue';
});

hearts.forEach = function(item){
    item.style.backgroundColor = 'black';
};
hearts.forEach();