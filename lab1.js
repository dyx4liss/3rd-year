const readline = require('readline');

// Создаем интерфейс для чтения ввода
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функция для подсчета количества цифр в числе
function countDigits(number) {
    return number.toString().length;
}

// Функция для нахождения наибольшего числа в массиве
function findMaxInArray(array) {
    return Math.max(...array);
}

// Функция для подсчета суммы всех цифр в числе
function sumOfDigits(number) {
    return number.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
}

// Задача 1: Подсчет количества цифр в числе
rl.question('Введите число для подсчета количества цифр: ', (input) => {
    const digitCount = countDigits(input);
    console.log(`Количество цифр в числе: ${digitCount}`);

    // Задача 2: Нахождение наибольшего числа в массиве
    rl.question('Введите массив чисел, разделенных пробелом: ', (arrayInput) => {
        const array = arrayInput.split(' ').map(Number);
        const maxNumber = findMaxInArray(array);
        console.log(`Наибольшее число в массиве: ${maxNumber}`);

        // Задача 3: Подсчет суммы всех цифр в числе
        rl.question('Введите число для подсчета суммы его цифр: ', (numberInput) => {
            const sum = sumOfDigits(numberInput);
            console.log(`Сумма всех цифр в числе: ${sum}`);

            // Закрываем интерфейс
            rl.close();
        });
    });
});
