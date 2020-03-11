//Say Hi
// В этой миссии вы должны написать функцию, которая представит человека по переданным параметрам.
// Входные данные: Два аргумента строка(str) и положительное число(int)
const sayHi = (str, int) => {
    return 'Hi. My name is ' + str + ' and I\'m ' + int + ' years old';
}

//Index Power
//Дан массив с положительными числами и число N. Вы должны найти N-ую степень элемента в массиве с индексом N.
const indexPower = (arr, int) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === int) {
            return Math.pow(arr[i], int);
        }
        if (arr.length - 1 < int) {
            return -1;
        }
    }
};

//Fizz Buzz
// Вы должны написать функцию, которая принимает положительное целое число и возвращает:
// "Fizz Buzz", если число делится на 3 и 5;
// "Fizz", если число делится на 3;
// "Buzz", если число делится на 5;
// Число, как строку для остальных случаев.
// Входные данные: Число, как целочисленное (int).
const fizzBuzz = (int) => {
    if (int % 15 === 0) {
        return 'Fizz Buzz';
    }
    if (int % 3 === 0) {
        return 'Fizz';
    }
    if (int % 5 === 0){
        return 'Buzz';
    }
    return String(int);
};