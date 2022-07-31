'use strict';

function first(){
    //do something
    setTimeout(function(){
        console.log(1);    //вывод 1 после 500 мс
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

// а если мы хотим строгий порядок выполнения функций??? - CallBack! 
// выполнение второй функции только после выполнения первой

function learnJS(lang,callback){    // в качестве аргемента одной функции мы передаем другую функцию
    console.log(`im learning ${lang}`); //симуляция задержики сервера в 1 секунду
    callback();
}

function done(){
    console.log('ok');
}

learnJS('JavaScript',done);     

//callback - использовании функции в качестве аргумента другой функции.