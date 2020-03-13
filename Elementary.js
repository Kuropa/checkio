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

//Common Words
//Функция должна находить все слова, которые появляются в обеих строках.
const commonWords = (str1, str2) => {
    const arr1 = str1.split(',');
    const arr2 = str2.split(',');
    let result = [];
    arr1.forEach(e => {
        arr2.forEach(j => {
            if (e === j) {
                result.push(e);
            }
        })
    });
    return String(result.sort());
};

//The Most Numbers
//Вам нужно найти разницу между самым большим (максимум) и самым малым (минимум) элементом.
const mostNumbers = (...num) => {
    const maxNumber = Math.max.apply(Math, num);
    const minNumber = Math.min.apply(Math, num);
    const result = maxNumber - minNumber;
    return result > 0 ? result : 0;
};

//Count Inversion
//Вам дана последовательность уникальных чисел и вы должны подсчитать число инверсий в этой последовательности.
const countInversion = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                result.push(arr[i]);
            }
        }
    }
    return result.length;
};

//The Most Frequent
//Определить наиболее встречающуюся строку в последоваельности.
const mostFrequent = (arr) => {
    const obj = {};
    for (let i = 0; i < arr.length; i++) {
       let key = arr[i];
       if (key in obj) {
            obj[key] += 1;
        } else {
            obj[key] = 1;
        }
    }
    const max = Math.max.apply(null, Object.values(obj));
    return String(Object.keys(obj).filter(k => obj[k] === max));
};
console.log(mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]));