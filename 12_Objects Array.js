let arr = ['a', 'b', 'c'];
let arr2 = arr; //приравнивает по ячейкам памяти - классы так работают reference type 
// структуры работают как value type
arr[1]= 'x';
console.log(arr2);

let obj = {
    a: 'a',
    b: 'b',
    c: 'c'
};

let obj2 = obj; //приравнивает по ячейкам памяти

obj.a = 'x';
console.log(obj2);  //приравнивает по ячейкам памяти

console.log(arr[1]);
console.log(obj.a);

obj.d = '1234'; //добавление обьекта
arr[10] = 'eleven'; //добавление элемента массива

console.log(obj);
console.log(arr);





