'use strict';
//****FUNCTION DECLARATION******
function showFirstMessage (text) {
 console.log(text);
}
showFirstMessage("Hello World"); // глагол + существительное над которым осуществляется действие
//локальная переменная функции в {} может быть использована только внутри этой функции.
// Функция может работать c глобальными переменными и возвращает ей значение по функции:
let num = 20;
function showNumber () {
    num = 10;
}
showNumber ();
console.log (num);
//Функция ищет переменные сначала внутри себя. потом на уровень выше. потом на уровень выше и.т.д

function calc(a,b) {
    return (a+b);
    //console.log(a)  //не будет работать ничего после return
}
//return - возвращение значения после return
console.log(calc(6,9));
console.log(calc(8,1));

//возврат значение локальной переменной в глобальную программу
function ret() {
    let num = 50; // local var
    return num;   // возврат из функции
}
const anotherNUM =ret();
console.log(anotherNUM);
//console.log(num); нельзя напримую вызвать num, потому что она локальная, а функция возвращает только ее значение 
//ВСЕ ФУНКЦИИ ОПРЕДЕЛЯЮТСЯ ЕЩЕ ДО НАЧАЛА РАБОТЫ СКРИПТА(ПРОГРАММЫ):
console.log(calc(6,9));
function calc(a,b) {
    return (a+b);
}

//*****FUNCTION EXPRESSION */
//ОТЛИЧИЕ!! СОЗДАЕТСЯ ТОЛЬКО ТОГДА, КОГДА ДОХОДИТ ПОТОК КОДА! МОЖНО ВЫЗВАТЬ ТОЛЬКО ПОСЛЕ ОБЪЯВЛЕНИЯ
const logger = function() {
    console.log('Hello');
};
logger();

//****СТРЕЛОЧНЫЕ ФУНКЦИИ */
const calculator = (a,b) => a + b; 
//второй способ записи. для более сложных функций
const calculatorr = (a,b) => {
    console.log(a);
    return (a + b);
}; 