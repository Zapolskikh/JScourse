for (let i = 0; i < 3; i ++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}


/* 
**
***
****
*****
******
******* */
// мое решение
let star = '';
for (let j = 1; j < 7; j++) {
    star = star + '*';
    console.log(star);

} 

// курс
let result = '';
const pyramideLength = 7;

for(let i = 1; i < pyramideLength; i++) {

    for (let j = 0; j < i; j++) {
        result +='*';
    }
    result+= '\n'; //перенос на следующую строку
}
console.log(result);

//метка!
metka: for (let i = 0; i < 3; i ++) {
    console.log(`first lvl: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second lvl: ${j}`);
        for (let k = 0; k < 8; k ++) {
            if (k===2) {continue metka;}
            console.log(`third lvl: ${k}`);
        }
    }
}