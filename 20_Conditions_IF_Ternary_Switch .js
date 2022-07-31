'use strict';
 let num = 10;
if (num == 10) {
    console.log('OK');
} else if (num < 10) {
    console.log('less');
} else {
console.log('More'); 
}

//ternary operator
(num === 10) ? console.log('ok') : console.log('error');

//switch == case //работает и со строками
switch(num){
    case 10:
        console.log('верно');
        break;
    case 9: 
        console.log('неверно');
        break;
    case 0:
        console.log('ноль');   
    break;
}
 