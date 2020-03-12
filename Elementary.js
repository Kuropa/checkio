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
    if (symbol === '') {
        return undefined;
    }
    for (let i = firstIndex + 1; i < str.length; i++) {
        if (str[i] === symbol) {
            return i;
        }
    }
};

//Correct Sentence
// На вход Вашей функции будет передано одно предложение. Необходимо вернуть его исправленную копию так,
// чтобы оно всегда начиналось с большой буквы и заканчивалось точкой.
const correctSentence = (str) => {
    const firstIndex = str[0];
    if (str.slice(-1) !== '.') {
        return firstIndex.toUpperCase() + str.slice(1) + '.';
    }
    return str;
};

//Even the Last
// Дан массив целых чисел. Нужно найти сумму элементов с четными индексами (0-й, 2-й, 4-й итд),
// затем перемножить эту сумму и последний элемент исходного массива. Не забудьте, что первый элемент массива имеет индекс 0.
const evenLast = (arr) => {
let result = 0;
    for (let i = 0; i < arr.length; i += 2) {
        result += arr[i];
    }
    result *= arr.slice(-1);
    return result;
};
console.log(evenLast([0, 1, 2, 3, 4, 5]));