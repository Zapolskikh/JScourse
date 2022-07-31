// Место для первой задачи
function firstTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const arr = [3, 5, 8, 16, 20, 23, 50];
    const result = [];

    // Пишем решение вот тут
    result.length = arr.length;
    for (let i = 0; i < 7; i++) {
        result[i]=arr[i];
    }
    console.log(result);
    // Не трогаем
    return result;
}

// Место для второй задачи
function secondTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    // Пишем решение вот тут
    for (let i = 0; i <5; i++) {
     if (typeof(data[i]) == 'string')
     {
        data[i]=data[i]+' - done';
     }
     else {
        data[i]=data[i]*2;
     }
    }
    console.log(data);
    
    
    // Не трогаем
    return data;
}

// Место для третьей задачи
function thirdTask() {
    // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];

    // Пишем решение вот тут
    result.length = data.length;
    let j = 4;
    for (let i = 0; i <= 4; i++) {
        result[i]=data[j];
        j--;
    }

    console.log(result);
    
    // Не трогаем
    return result;
}