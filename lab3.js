// Функция для получения длины массива
function getArrayLength(arr) {
    return arr.length; // Возвращаем длину массива
}

// Функция для получения максимального элемента массива
function getMaxElement(arr) {
    return Math.max(...arr); // Возвращаем максимальный элемент
}

// Функция для получения индекса элемента в массиве
function getElementIndex(arr, element) {
    return arr.indexOf(element); // Возвращаем индекс элемента
}

// Пример массива
const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5];

// 1. Получаем длину массива
const length = getArrayLength(myArray);
console.log("Длина массива:", length); // Вывод: Длина массива: 9

// 2. Получаем максимальный элемент массива
const maxElement = getMaxElement(myArray);
console.log("Максимальный элемент массива:", maxElement); // Вывод: Максимальный элемент массива: 9

// 3. Получаем индекс элемента в массиве
const elementToFind = 5;
const index = getElementIndex(myArray, elementToFind);
console.log("Индекс элемента", elementToFind, "в массиве:", index); // Вывод: Индекс элемента 5 в массиве: 4
