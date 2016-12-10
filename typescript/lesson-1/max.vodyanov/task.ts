/*

 1)Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.

 */

function isInArray(a: (string|number|boolean)[], ...b: (string|number|boolean)[]): boolean {

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

function getUnique(...arr: (string|number|boolean)[]): (string|number|boolean)[] {

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


/*

 4)
 Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 цифры и специальные символы должны остаться на месте
 s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 s1tar3t 2   low5  ->  t1rat3s 2   wol5

 */

function isCharacter(str: string): boolean {
    return /[а-яА-ЯA-Za-z]+/.test(str);
}


function revert(str: string): string {

    let words: string[] = str.split(' '),
        result: string[] = [];

    words.forEach((item: string): any => {
        let word: string[] = item.split(''),
            symbols: (string|boolean)[] = [],
            noSymbols: string[] = [];

        for (let i of word) {
            if (!isCharacter(i)) {
                symbols.push(i)
            }
            else {
                symbols.push(false);
                noSymbols.push(i)
            }
        }

        noSymbols.reverse();

        for (let i in symbols) {
            if (!symbols[i]) {
                symbols[i] = noSymbols.shift()
            }
        }

        result.push(symbols.join(''))
    });

    return result.join(' ')
}



console.log(revert('s1tar3t 2 hellow'));
console.log(revert('s1ta$%r3t 2 hel^low'));
console.log(revert('s1tar3t 2   low5'));

