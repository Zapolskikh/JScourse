const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
let maxNum = 5;
for (let  i= 1; i < 13; i++) {
    if (i%2 == 0) {
        continue;
    }

    for (let k = maxNum; k > 0; k--) {
        result+= ' ';
      }


    for (let j = 0; j < i; j++) {

      result+= '*';
    }
result +='\n';
maxNum--;
}
console.log(result);

