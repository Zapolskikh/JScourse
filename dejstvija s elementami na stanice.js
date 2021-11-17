'use strict';

const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector('heart');
const wrapper = document.querySelector('.wrapper');

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
item.style.backgroundColor = 'black';
});

hearts.forEach(function(item){
    item.style.backgroundColor = 'blue';
}); 

//создание элементов
const div = document.createElement('div');//создался но только в джс
const text = document.createTextNode('tut byl ja');

//работа с цсс классами

div.classList.add('black');//добавили класс к див

document.body.append(div); //Добавление в конец бади

//document.querySelector('.wrapper').append(div); //элемент появился в конце родителя wrapper
wrapper.append(div); // сверху тоже самое но с обьевлением переменной
wrapper.prepend(div);//в начало враппер

hearts[0].before(div); //перед первым сердечком
hearts[0].after(div); //после первого сердечка

circles[0].remove(); //удалили первый кружллчек
hearts[0].replaceWith(circles[0]);// заменяем сердечко кружочком(перемещением)

//УСТАРЕВШИЕ КОНСТРУКЦИИ!!!! НИЖе
//wrapper.appendChild(div); //=append
//wrapper.insertBefore(div, hearts[0]); //=hearts[0].before(div); //перед первым сердечком
//wrapper.removeChild(hearts[1]);// ==hearts[1].remove();
//wrapper.replaceChild(circles[0],hearts[0]); //=hearts[0].replaceWith(circles[0]);

//вписать текст
div.innerHTML = 'xyi'; //текст внутрь див
div.innerHTML = '<h1>xyi</h1>'; //заголовок первого порядка
//можно вставлять хтмл текст но как строку
div.textContent = 'hello';// работа только с текстом!!!! никаких хтмл
//для данных получаемых от пользователя, чтобы пользователь не могу вставть ствой код

div.insertAdjacentHTML("beforebegin",'<h2>pipiska</h2>'); //хтмл код перед див
div.insertAdjacentHTML("afterbegin",'<h2>pipiska</h2>'); //в начало элемента
div.insertAdjacentHTML("beforeend",'<h2>pipiska</h2>'); //в конец
div.insertAdjacentHTML("afterend",'<h2>pipiska</h2>'); //после элемента