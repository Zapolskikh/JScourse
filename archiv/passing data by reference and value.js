'use strict';

let a = 5;
let b = a;
b = b + 5;
console.log(b);
console.log(a);
//передача по значению. для принимитных(простых) данных

const obj = {
    a: 5,
    b: 1
};
const copy = obj;
copy.a = 10;
console.log(copy);
console.log(obj);
// они равны. копия обьекта изменила и первоначальный
// a = 10 b = 1, a = 10, b = 1;
// передача по ссылке!!! это не копия обьекта. копия передает ссылку
// соовсетвенно изменения в copy меняют те же ссылки, что и у obj.


// копирование обьекта
function copyy (mainObj) {
 let objCopy = {};
 let key;
 for (key in mainObj) {
     objCopy[key] = mainObj[key];
 }
 return objCopy;

}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4,
    }
};
const newNumbers = copyy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;  // x поменялся по ссылке. потому что мы работаем
// на первом уровне. вложенные структуры в таком случае будут меняться по ссылке.
console.log(numbers);
console.log(newNumbers);

//соединение обьектов
const add = {
    d: 17,
    e: 20
};
//добавление обьекта add в обьект numbers
console.log(Object.assign(numbers, add)); 
//независимая поверхностаная стректура обьекта!!!
// подуровни все еще по ссылке.
// можно делать независимые обьекты первого уровня:

const copywithassign = {};
// clonenumbers = numbers по значениям первого уровня, не по ссылкам. вложенные стректуры равны по ссылкам.
const cloneNumbers = Object.assign(numbers,copywithassign);
//или
const cloneNumberss = Object.assign(numbers,{});

//копирование массива //так же поверхностная копия
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'xyi';

console.log(oldArray);
console.log(newArray);

//пробуем применить .slice к обьекту
const oldObj1 = {
    a: 5,
    b: 6
};
const newObj1 = oldObj1.slice();
//hint выдает ошибку для данного типа данных
//slice does not exist on type obj

//новые ES6 и ES8:
//...(spread) раскладывает обьект или массив на самостоятельные элементы
// которые могут быть использованы для включения в другие массивы, обьекты
const video = ['youtube', 'vimeo', 'pornhub'];
const blogs = ['wordpress','livejournal','blogger'];
const internet = [...video,...blogs,"vk"];
console.log(internet);

function log(a,b,c){
    console.log(b);
    console.log(a);
    console.log(c);
}
const num = [2,5,7];
log(...num);

//копия с помощью spread
//array
const array = ['a', 'b'];
const newArrayy =[...array];
//for obj
const q = {
    one:1,
    two:2
};
const qq = {...array};


