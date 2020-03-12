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

//Digits Multiplication
//Дано положительное целое число. Вам необходимо подсчитать произведение всех цифр в этом числе, за исключением нулей.
const digitsMultip = (int) => {
    const intToStr = String(int);
    let result = 1;
    for (let i = 0; i < intToStr.length; i++) {
        if (intToStr[i] != 0) {
            result *= Number(intToStr[i]);
        }
    }
    return result;
};

//Secret Message
// Дан кусок текста. Соберите все заглавные буквы в одно слово в том порядке как они встречаются в куске текста.
// Например: текст = "How are you? Eh, ok. Low or Lower? Ohhh.", если мы соберем все заглавные буквы, то получим сообщение "HELLO".
const findMessage = (str) => {
    str = str.replace(/[\s/\W/\d]/g, '');
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i];
        }
    }
    return result;
};

//Second Index
//Даны 2 строки. Необходимо найти индекс второго вхождения второй строки в первую.
const secondIndex = (str, symbol) => {
    const firstIndex = str.indexOf(symbol);
    for (let i = firstIndex + 1; i < str.length; i++) {
        if (str[i] === symbol) {
            return i;
        }
    }
};
console.log(secondIndex("sims", "s"));