//Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. Причем, их количество должно быть равно переданному аргументу.

//Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

//Пример:

///fib(4) => ''0 1 1 2"

//fib(7) => ''0 1 1 2 3 5 8"

//fib('7') => ''"

//fib(1) => "0"

//fib(0) => ''"

'use strict';

function fib(numOfNum) {
    let answer = '';
    if (Number.isInteger(numOfNum)) {
        let arr = [];
        arr[0] = 0;
        arr[1] = 1;
        for (let i = 2; i < numOfNum; i++) {
            arr[i] = arr[i - 1] + arr[i - 2];
        }
        for (let i = 0; i < numOfNum; i++) {
            answer = answer + `${arr[i]}` + ' ';
            if (numOfNum - i == 1) {
                answer = answer.substring(0, answer.length - 1);
            }
        }

    }
    else {
        answer = '';
    }
    return answer;
}

console.log(fib('99'));

//typeof(numOfNum) == 'number' &&