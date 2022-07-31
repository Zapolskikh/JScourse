'use strict';
const hamburger = 5;
const fries = 1;
const cola = 19;
if(hamburger > 3  && fries) { //false only ==> o null '' indefinded NaN!!! else => TRUE!
    console.log('OK');
}
else {
    console.log('NOT OK');
}

console.log( hamburger === 3 && cola && fries);//выводит первое ФОЛЗ или последнее значение
console.log( hamburger === 3 || cola || fries);//или запинается на первом ТРУ или последнее значение
//можно делать выборку что зотя бы один ТРУ