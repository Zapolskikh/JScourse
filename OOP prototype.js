'use strict';

let str = 'some';
let strObj = new String(str);

console.log(typeof(str)); //string
console.log(typeof(strObj)); //object

console.dir([1,2,3]);

/// ustarevshij format
const soldier = {
    health: 400,
    armor: 100
};
const john = {
    health: 100
};
john.__proto__ = soldier; //протитоп джона - солдат. имеет все свойства и методы прототипа
console.log(john);  //{ health: 100 } 
console.log(john.armor); //100 = берет свойства из прототипа
///сверху старый формат (не используется)

// новые форматы

Object.setPrototypeOf(jonh, soldier); //== john.__proto__ = soldier /протитоп джона - солдат

//
const avery = Object.create(soldier); // создает новый обьект эйвери с прототипом солдат
