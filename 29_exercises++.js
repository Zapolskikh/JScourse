'get strict';
// Место для первой задачи
function getTimeFromMinutes(timeGet) {
    let answer = '';
 if (Number.isInteger(timeGet) && timeGet>=0) {
    
    let hours  = Math.trunc(timeGet/60);
    let minutes = timeGet % 60;

    if (hours % 10 === 0 || hours % 10 === 5 || hours % 10 === 6 || hours % 10 === 7 || hours % 10 === 8 || 
        hours % 10 === 9)
        {
        answer = `Это ${hours} часов и ${minutes} минут`;
    }
    else if (hours % 10 === 1){
        answer = `Это ${hours} час и ${minutes} минут`;
    }
    else 
    {
        answer = `Это ${hours} часа и ${minutes} минут`;
    }

 }
 else
 {
    answer = "Ошибка, проверьте данные";
 }
 return answer;
}
console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них.
// Если один из аргументов не является числом или их 
//меньше 4 - возвращается 0. Дробные числа разрешены.
// Место для второй задачи

function findMaxNumber(num1,num2,num3,num4) {
let maxNum;
    if (typeof(num1,num2,num3,num4) == "number") {
         maxNum = Math.max.apply(null, [num1,num2,num3,num4]);
    }
    else {
        maxNum = 0;
    }
return maxNum;
}
console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));


