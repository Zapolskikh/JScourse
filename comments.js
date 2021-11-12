//ТИПЫ ДАННЫХ

//простые
let number = 5;
const num = 5;
let string = "hello";
const bool = true;

//Обьeкты
const obj = {
    a:50,
    name:'Oleg',
    loh: false
};
console.log(obj.name);
console.log(obj['name']); //такой себе способ, лучше через точку
//array

let arr =['1','2',true,777,{},[]];
console.log(arr[0]); //--1
console.log(arr[2]); //-true

// ********proverka elementov po standartu = caniuse.com; *******

// proverka novych standartov
"use strict";

//communication with user
console.log(num); //console
alert("Hello");  //alert
const result = confirm('are you here?'); // ok. cancel.
const answer = prompt('how old are you',''); //question for user, answer = answer. String
const answernum = +prompt('how old are you',''); //question for user, answernum = answer. Number

//typeof
const type = typeof(num); 


//interpolation
const category = 'toys';
console.log('https://someurl.com/'+ category + '/' + '4'); //concatination
console.log(`https://someurl.com/${category}/5`); //interpolation

const user = 'oleg';
alert(`privet, ${user}`);






