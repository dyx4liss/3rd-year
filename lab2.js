// 1. Сортировка массива по возрастанию
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// 2. Подсчет количества положительных чисел в массиве
function countPositiveNumbers(arr) {
    return arr.filter(num => num > 0).length;
}

// 3. Сортировка массива строк по алфавиту
function sortStrings(arr) {
    return arr.sort();
}

// Пример использования
const numbers = [3, -1, 4, 1, 5, -9, 2, 6, 5, 3, 5];
const strings = ["banana", "apple", "orange", "mango"];

// Сортировка чисел
const sortedNumbers = sortNumbers(numbers);
console.log("Отсортированный массив чисел:", sortedNumbers);

// Подсчет положительных чисел
const positiveCount = countPositiveNumbers(numbers);
console.log("Количество положительных чисел:", positiveCount);

// Сортировка строк
const sortedStrings = sortStrings(strings);
console.log("Отсортированный массив строк:", sortedStrings);
