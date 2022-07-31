const curr = 10;
const amount = 10;
const discount = 10;

function convert (amount, curr) {
    return curr*amount; //возвращает результат, который будет использоваться при вызове функции
}

function promotion(result) {
    console.log(result*discount);
}

///////////////////////////////////////////

function test() {
    for (let i = 0; i <5; i++)
    {
        console.log(i);
        if (i===3) return; //можно использовать как выход из функции undefined
    }
    console.log('done');
}