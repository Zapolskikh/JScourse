'use strict';
let num = 50;
while (num<55) {
    console.log(num);
    num++; // 
}

let num2 = 50;
do {
    console.log(num2);
    num2++;
}
while (num2<49); // в любом случае пройдет один раз

let num3 = 10;
for (let i = 1; i<8;  i++) {
    console.log(num3);
    }

for (let i =1; i <10; i++) {
    if (i == 6) {
        //break;  //1,2,3,4,5
        continue; //1,2,3,4,5,6,7,8,9
    }
    console.log(i);
}   


