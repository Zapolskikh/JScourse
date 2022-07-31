/// 1
'use strict';

function sayHello (name) {
    
return `Привет, ${name}!`;
}
console.log(sayHello('Антон'));

//// 2

function returnNeighboringNumbers(primalNumber) {
let neighboringNumbers = [primalNumber-1,primalNumber,primalNumber+1];
return neighboringNumbers;
}

console.log (returnNeighboringNumbers(5));

///// 3
function getMathResult(baza, rep) {

let progression = '';

if (typeof(rep)===Number || rep > 0){

for (let i=1; i<=rep; i++){
    progression=progression + `${baza*i}`;
    if (rep==i) {
    return progression;
    }
    else
    {
        progression=progression + `---`;
    }
}
}
else{
    return baza;
}

}

 console.log(getMathResult(10,0));

