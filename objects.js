"use strict";

const obj = new Object(); //drugoj sposob obj. NOT OK

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        //метод - действие которое умеет совершать обьект
        //собственный метод - функция созданная внутри обьекта, должна вызываться пользователем.
    console.log("test");
    }    
};

options.makeTest();

console.log(options);

delete options.name;  /// delete some properties of obj.
let counter = 0;
console.log(options);
//перебор ключей обьекта  ---- **** https://learn.javascript.ru/object-for-in ******
for (let ky in options) {  //сработает столько раз, сколько свойств имеет object    -  obj[key]
 if(typeof(options[ky])==='object'){     
for (let i in options[ky]) {
    console.log(`свойство ${i} имеет значение ${options[ky][i]}`);   //obj[key][key]
}
 }
 else {
    console.log(`свойство ${ky} имеет значение ${options[ky]}`);
    counter++; //счетчик количества обьектов
 }
}
//
//методы и свойства обьетков -- *** https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/object
console.log(counter);

//встроенные функции внутри обьекта
console.log(Object.keys(options));   //показывает все свойства обьекта
console.log(Object.keys(options).length);   //показывает длину обьекта (количество свойств)

