/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const promoAdvImg = document.querySelectorAll(".promo__adv img");
console.log(promoAdvImg);

promoAdvImg.forEach(function(item) {
item.remove();
});

promoAdvImg.forEach(item=>{
    item.remove();
});

const promoBg = document.querySelector(".promo__bg");

const PromoGenre = promoBg.querySelector(".promo__genre");
PromoGenre.textContent = 'Драма';

promoBg.style.backgroundImage = "url('img/bg.jpg')";                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

///1 sposob
// const promoInteractiveFilms = document.querySelectorAll('.promo__interactive-item');
// promoInteractiveFilms.forEach(item=>{
//     item.remove();
// });
//тоже самое через очистку родительсткого элемента 2 sposob
const promoInteractiveList = document.querySelector('.promo__interactive-list');

promoInteractiveList.innerHTML = '';
//sortirovka
movieDB.movies.sort();
//verstka
console.log(promoInteractiveList.innerHTML); //посмотреть элементы
movieDB.movies.forEach((film,i) => {
    //a=a+1; a+=1;
    promoInteractiveList.innerHTML += `
    <li class="promo__interactive-item">${i+1} ${film}
        <div class="delete"></div>
    </li>   
    `;

});