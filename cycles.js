'use strict';

let num = 50;
//while
while(num <= 55) {
    console.log(num);
    num++;
}

//do while
do {
    console.log(num);
    num++; 
}
while (num < 55);

//for
for (let i=1; i<10; i++){     //условие, сравнение, шаг.
    console.log(i);
}

//for + break
for (let i=1; i<10; i++){ 
     if(i==6){
         break;
    }
    console.log(i);
}

//for + continue  //пропускаем 6
for (let i=1; i<10; i++){ 
    if(i==6){
        continue;
   }
   console.log(i);
}

