'use strict';

let x = 5; //alert(x++); // 5; ++x = 6.
console.log(x++);


let qe = [] + false - null + true; //NaN .. [] + false пустой массив это мааситв со строками по дефолту. 
// 'false' - null = Nan
console.log(qe);

let y=1;
let x = y =2; //2 = последовательное присваивание
console.log(x);

//Чему равна сумма [ ] + 1 + 2? //12
let q = [ ] + 1 + 2;
console.log(q); 
//Что выведет этот код: alert( "1"[0] )? //1
console.log( "1"[0] ); //1
//Чему равно 2 && 1 && null && 0 && undefined ? //null!!!!! // && всегда запинается на лжи
console.log(2 && 1 && null && 0 && undefined);
//Есть ли разница между выражениями? !!( a && b ) и (a && b)? // !! - перевод в boolean 

//Что выведет этот код: alert( null || 2 && 3 || 4 ); ? || всегда запинается на правде
//Что выведет этот код: alert( null || 2 && 3 || 4 ); ? || && по приоритету выше ||
console.log( null || 2 && 3 || 4 ); 

//a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? //net

//Что выведет этот код: alert( +"Infinity" ); ? тип данных число выведет Infinity

//Верно ли сравнение: "Ёжик" > "яблоко"? //unicode - все зависит от символов номеров

//Чему равно 0 || "" || 2 || undefined || true || falsе ?
console.log(0 || "" || 2 || undefined || true || falsе); //2 - ili zapinaetsya na pravde
