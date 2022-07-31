'use strict';

//first exercise
function calculateVolumeAndArea(cubeSide) {
    let answer = '';

    if (typeof (cubeSide == Number) && cubeSide > 0 && Number.isInteger(cubeSide))  
    {
        let Volume = cubeSide * cubeSide * cubeSide;
        let Area = cubeSide * cubeSide * 6;
        answer = `'Объем куба: ${Volume}, площадь всей поверхности: ${Area}'`;
    }
    else {
        answer = '"При вычислении произошла ошибка"';
    }
    return answer;
}
console.log(calculateVolumeAndArea(5));

//second exercise
function getCoupeNumber(numberOfSeat) {
    let answer = '';
    if (!Number.isInteger(numberOfSeat) || numberOfSeat<0)
    {
        answer = "Ошибка. Проверьте правильность введенного номера места";
    }
    else if ( numberOfSeat === 0 || numberOfSeat > 36 )
    {
        answer = "Таких мест в вагоне не существует";
    }
    else
    {
        answer = Math.trunc((numberOfSeat+3)/4);
    }
    return answer;
}

console.log(getCoupeNumber(14));
console.log(getCoupeNumber(15));
console.log(getCoupeNumber(16));
console.log(getCoupeNumber(17));
console.log(getCoupeNumber(18));