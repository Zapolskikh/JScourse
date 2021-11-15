'use strict';

//to string

//1)

console.log(typeof(String(null)));

//2) konkotinacia
console.log(typeof(5 + ''));  //stroka
const num = 5;
console.log("https//vk.com/catalog"+num);
const fontSize = 26 + 'px'; //stroka

//to number
//1)
console.log(typeof(Number('56')));
//2) unarny +
console.log(typeof(+"5")); //number
//3)metod patseint
console.log(typeof(parseInt('15px',10)));
 
//to boolean
0, '', null, undefined, Nan; //-fasle//ostalnoje true
let switcher = null;
 if(switcher){
     console.log("working");
 }

switcher = 1;
 if(switcher){
     console.log("working");
 }

//2)
console.log(typeof(Boolean('4')));
//3)
console.log(typeof(!!'4'));

