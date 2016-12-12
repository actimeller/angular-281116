/*

 1)Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.

 */

function isInArray(a: any[], ...b: any[]): boolean {

    let counter: number = 0;

    for (let i of b) {
        for (let j of a) {
            if (i === j) {
                counter++
            }
        }
    }

    return counter == b.length;
};


console.info(isInArray([1, 2, 3], 1, 2, 3)); // true
console.info(isInArray(['yes', 'no', 'maybe'], 'yes', 'no')); // true
console.info(isInArray(['white', 'black'], 'white', 'yellow')); // false


/*

 2)
 писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

 */


function isString(item: any): item is string {
    if (typeof item === 'string') {
        return true;
    }
    return false;
}

function isNumber(item: any): item is number {
    if (typeof item === 'number') {
        return true;
    }
    return false;
}

function summator(...a: (number | string)[]): number | string {
    let result = 0;
    for (let i of a) {
        if (isString(i)) {
            result += parseInt(i);
        }
        if (isNumber(i)) {
            result += i;
        }
    }
    return result
}

console.info(summator(1, 2, '12')); // 15


/*

 3)
 Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.

 */

function getUnique(...arr: any[]): any[] {

    let uniqueArr = [];
    nextInput: for (let i of arr) {
        for (let j of uniqueArr) {
            if (i === j) continue nextInput;
        }
        uniqueArr.push(i)
    }

    return uniqueArr
}

console.info(getUnique(1, 1, 1, 2, 3, "шире", "дальше", "шире")); // [1, 2, 3, "шире", "дальше"]