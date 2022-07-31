'use strict';

const arr = [0,1,2,3,4,5,6];

arr.pop(); // 0,1,2,3,4,5 - удаляет последний член массива
console.log(arr);

arr.push(10); // добавляет один элемент в конец
console.log(arr);
//перебор
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//перебор for of
for (let value of arr) {
    console.log(value);
}

arr[99] = 0; //все элементы до 99 станут пустыми 
console.log(arr);  //Длинна 100
console.log(arr.length); //нужно соблюдать длинны массивов при обьяслении новых аргементов
// иначе неизвестные элементы между

const arrr = [0,1,2,3,4,5,6];
//перебор с настройкой/ внутренния функция(метод) будет выполняться для каждого элемента массива
arrr.forEach(function(item,i,arr){
//принимает 3 агремента - 1) элемент который мы перебираем
//2) номер по порядку
//3) ссылка на массив
console.log(`${i}: ${item} inside ${arr}`);
}); //самый распространнениый метод!
// for (let value of arr)  выгоднее тем, что можно испольковать break/continue

const str = prompt("",""); //воод пользователя
const products = str.split(", "); // постоение массива из элементов заданных в строку
console.log(products); // запятая в данном случае служит как индикатор нового элемента массива
console.log(products.join('; ')); //вывод в консоль массива в строчку через ; 

products.sort(); // сортировка по алфавиту как строки
console.log(products.join('; ')); //

const arrrr = [0,10,2,99,100,4,5,6];
arrrr.sort(); //c числами работате некорректно
console.log(arrrr); // ставнивает не по значению в по первым цифрам

const arrnum = [24, 223, 74, 45, 345, 2, 6];
arrnum.sort(compareNum);
function compareNum(a,b) {  //сортировка по числам
    return a - b; // метод быстрой сортировки
}
console.log (compareNum);

//псевдомассивы не имеют методов

