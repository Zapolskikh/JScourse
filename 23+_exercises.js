// Место для первой задачи
function firstTask() {
    // Пишем решение вот тут
    let num1 = 5;
    while (num1 <= 10) {
        console.log(num1);
        num1++;     
    }
}

// Место для первой задачи // решение 2
    let numMax = 10;
for (let i=5; i <= numMax; i++) {
    console.log(i);
}



// Место для второй задачи
function secondTask() {
    for (let i = 20; i >= 10; i--) {
    if (i===13) {break;}
    console.log(i); 
}
    
    
}

// Место для третьей задачи
function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 1) {continue;}
        console.log(i); 
    } 
}

// Место для четвертой задачи

// Цикл, который нужно переписать:

 for (let i = 2; i <= 16; i++) {
     if (i % 2 === 0) {
         continue;
     } else {
        console.log(i);
    }
 }

function fourthTask() 
{
    let i = 2;
    while (i< 16) {
        i++;
        if (i % 2 === 0) {continue;}
        console.log(i);
    }
    
    
}

// Место для пятой задачи
//решение 1 XD
function fifthTask() {
    const arrayOfNumbers = [];

    // Пишем решение вот тут
    arrayOfNumbers[0]=5;
    arrayOfNumbers[1]=6;
    arrayOfNumbers[2]=7;
    arrayOfNumbers[3]=8;
    arrayOfNumbers[4]=9;
    arrayOfNumbers[5]=10;
    console.log(arrayOfNumbers);

    // Не трогаем
    return arrayOfNumbers;
}
//рещшение 2
let arrayOfNumbers = [];
arrayOfNumbers = new Array (5);
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i-5] = i;
}

console.log(arrayOfNumbers);