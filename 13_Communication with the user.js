"use struct";

alert('Hello'); // обьявление
const result = confirm("Are you here?"); //confirm - подстверждение
console.log(result);
const answer = prompt('are you 18?',''); //prompt - выдает поле для ответа (struct)
const answerNumber = +prompt('are you 18?',''); //prompt - выдает поле для ответа  (number) 

console.log(answer); //вся инфа от пользователя приходит как строка

const answers = []; //массив ответов
answers[0] = prompt ('whats your name?','');

//document.write(answers); //перепишет всю страницу на аргумент

сonsole.log(typeof(answers)); // проверка типа данных;




