"use strict";
//if -- boolean condition
if(4 == 9) {
    console.log ("ok!");
}
else {
    console.log("Error");
}
 
//else if
const num = 50;
if(num < 49) {
    console.log ('less');
} else if (num > 100) {
    console.log ('more');
} else {
    console.log ('num is between 49 and 100');
}

//Ternary operation - 3 arguments
(num ===50) ?  console.log ('equal') : console.log ('less or more');
//binary 4 + 4;
// unary +4;

//switch //case //у строк точно так же, строгое сравнение
switch (num) {
    case 49: 
        console.log ('no, num is 49');
        break;
    case 50: 
        console.log ("YES");
        break;
    default:
        console.log ("error");
        break;
}
