//события - действия совершаевые на сайте.
//первый способ в Html
//<button onclick='alert("Click")' id="btn">Нажми меня</button>
//не рекомендуется

const btn = document.querySelectorAll('button');
//тоже не ок

// btn[0].onclick = function() {
//     alert('click');
// };
//новое своство заменит старое - плохо
//нельзя удалить событие, когда это необходимо - плохо

//OK

btn[0].addEventListener('click', function() {
alert('click');
});
//коллбэк будет ждать пока выполнится первое действие
//не теряем функционал
btn[0].addEventListener('click', function() {
    alert('second click');
    });
const deleteElement = function(event) {
    console.log(event.target);
};

btn[0].addEventListener('mouseenter', function(deleteElement) {
        console.log('mouseenter');
        console.log(deleteElement); //можно посмотерть свойства события
        //изменение свойств
    });

