'use strict';
//cвойство = толлько одно - длинна
const str = 'test';
console.log(str.length);  //length
const arr = [1,2,4];
console.log(arr.length);
// *****ВСЕ О СТРОКАХ == https://learn.javascript.ru/string****
// *****ВСЕ МЕТОДЫ И ИХ ПРЕМЕНЕНИЕ. а так же доп. информация == 
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String***
console.log(str[2]); //можно обращаться к каждому из символов в строке.
//
str[2] = 'd';   //!!!!! NO
console.log(str);  //нельзя заменить символ в строке такмим способом...
// METHODS
const strr = 'text';
console.log(strr.toUpperCase());  //TEXT - не меняет исходик только внутри console.log();
console.log(strr); //text 
console.log(strr.toLowerCase());  //test
//поиск подстроки
const fruit = 'some fruit';
console.log(fruit.indexOf('fruit')); //5 - "fruit" начинается с пятой позиции
console.log(fruit.indexOf('u')); //7 
console.log(fruit.indexOf('q')); // -1 - значение не найдено
//взаимодействие со строками
const logg = 'hello world';
//вырезаем - slice
console.log(logg.slice(6,9)); //wor - вырезали с 6 по 9 позицию - 6 7 8
console.log(logg.slice(6)); //world - вырезали с 6 по бесконечную позицию - 6....
console.log(logg.slice(-5,-1)); //worl - вырезали с -5 до -1 - вырезаем с конца -5(w) -4(o) -3(r) -2(l) -1(d)
//substring
console.log(logg.substring(6,11));  //world подобная slice/ не поддерживает отрицательные значения
//вырежаем отпределенное количество символов 
console.log(logg.substr(6,2)); //wo - вырезали с 6 позиции 2 символа.


//Math. - в этом методе много подметодов, можно загуглить. все математиеские операции тут.
const num = 12.2;
console.log(Math.round(num));
const test = '12.2px';
console.log(parseInt(test)); //перевод числа в другую систему счисления = 12 перевели в Int.
console.log(parseFloat(test)); //перевод числа в другую систему счисления = 12.2 перевели в Float