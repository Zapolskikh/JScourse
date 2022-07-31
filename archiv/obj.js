"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: 'red',
    }
};
console.log(options.name);
// удаление элементов обьектов
delete options.name;
console.log(options);
// перебор данных обьекта
let counter =0;
for ( let key in options){  /// цикл сработает столько раз, сколько есть свойств обьекта на данном уровне
    console.log(`properties ${key}, has value ${options[key]}`);

}
//уровни обьекта и обращение к ним:
//{key} - верний уровень = name, width, height
// {options[key]}  - подуровень = name: "test", width: 1024 и.т.д
// {options[key][i]} - подподуровень = border: 'black', bg: 'red'
for ( let key in options){  /// цикл сработает столько раз, сколько есть свойств обьекта на данном уровне
    if(typeof(options[key])==='object') {
        for (let i in options[key]) {
            counter++; //подстчет обьектов
            console.log(`properties ${i}, has value ${options[key][i]}`);
        } 

    }        else{
        console.log(`properties ${key}, has value ${options[key]}`);
        counter++;
    }
} //создали еще один перебор для подобьекта!
console.log(options['colors']['border']); //простой пример работы подуровней = black
// свойства и методы обьектов - ***https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/object**
//МЕТОДЫ
console.log(Object.keys(options)); // создает массив где каждый ключ является элементов обьекта
console.log(Object.keys(options).length); //можно узнать длинну этого массива!
//данный метод используется потому что нельзя напрямую обрадиться к длинне обьекта

const optionss = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: 'red',
    },
    makeTest: function(){  //самостоятельный метод внутри обьекта - любая функция
        console.log('test');
    }
};
optionss.makeTest(); // круглые скобки = запуск.

//деструктуризация обьекта
const{border, bg} = optionss.colors;
console.log(border); //== black
//do it