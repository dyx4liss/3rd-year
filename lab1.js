// 1.Посчитать количество цифр в числе: пользователь вводит число, программа выводит количество цифр.
function countDigits() {
    const number = prompt("Введите число:");
    const digitCount = number.length; // Количество символов в строке
    alert("Количество цифр в числе: " + digitCount);
}

countDigits();

// 2. Определить наибольшее число из массива: пользователь вводит массив чисел, программа выводит наибольшее число.
function findMaxNumber() {
    const input = prompt("Введите массив чисел, разделенных запятыми:");
    const numbers = input.split(",").map(Number); // Преобразуем строку в массив чисел
    const maxNumber = Math.max(...numbers); // Находим максимальное число
    alert("Наибольшее число в массиве: " + maxNumber);
}

findMaxNumber();


// 3. Определить сумму всех цифр в числе: пользователь вводит число, программа выводит сумму всех его цифр.  напиши на javascript максимально простым языком
function sumOfDigits() {
    const number = prompt("Введите число:");
    const sum = number.split("").reduce((acc, digit) => acc + Number(digit), 0); // Суммируем цифры
    alert("Сумма всех цифр в числе: " + sum);
}

sumOfDigits();
