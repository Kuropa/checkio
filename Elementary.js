// В этой миссии вы должны написать функцию, которая представит человека по переданным параметрам.
// Входные данные: Два аргумента строка(str) и положительное число(int)
const sayHi = (str, int) => {
    return 'Hi. My name is ' + str + ' and I\'m ' + int + ' years old';
}
console.log(sayHi("Sveta", 26));

//Дан массив с положительными числами и число N. Вы должны найти N-ую степень элемента в массиве с индексом N.
const indexPower = (arr, int) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === int) {
            return arr[i] * i;
        }
    }
};
console.log(indexPower([1, 2, 3, 4], 2));