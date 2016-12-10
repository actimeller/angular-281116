/*

 1)Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.

 */
function isInArray(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var counter = 0;
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var i = b_1[_a];
        for (var _b = 0, a_1 = a; _b < a_1.length; _b++) {
            var j = a_1[_b];
            if (i === j) {
                counter++;
            }
        }
    }
    return counter == b.length;
}
;
console.info(isInArray([1, 2, 3], 1, 2, 3)); // true
console.info(isInArray(['yes', 'no', 'maybe'], 'yes', 'no')); // true
console.info(isInArray(['white', 'black'], 'white', 'yellow')); // false
/*

 2)
 писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

 */
function isString(item) {
    if (typeof item === 'string') {
        return true;
    }
    return false;
}
function isNumber(item) {
    if (typeof item === 'number') {
        return true;
    }
    return false;
}
function summator() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i - 0] = arguments[_i];
    }
    var result = 0;
    for (var _a = 0, a_2 = a; _a < a_2.length; _a++) {
        var i = a_2[_a];
        if (isString(i)) {
            result += parseInt(i);
        }
        if (isNumber(i)) {
            result += i;
        }
    }
    return result;
}
console.info(summator(1, 2, '12')); // 15
/*

 3)
 Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.

 */
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i - 0] = arguments[_i];
    }
    var uniqueArr = [];
    nextInput: for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var i = arr_1[_a];
        for (var _b = 0, uniqueArr_1 = uniqueArr; _b < uniqueArr_1.length; _b++) {
            var j = uniqueArr_1[_b];
            if (i === j)
                continue nextInput;
        }
        uniqueArr.push(i);
    }
    return uniqueArr;
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
function isCharacter(str) {
    return /[а-яА-ЯA-Za-z]+/.test(str);
}
function revert(str) {
    var words = str.split(' '), result = [];
    words.forEach(function (item) {
        var word = item.split(''), symbols = [], noSymbols = [];
        for (var _i = 0, word_1 = word; _i < word_1.length; _i++) {
            var i = word_1[_i];
            if (!isCharacter(i)) {
                symbols.push(i);
            }
            else {
                symbols.push(false);
                noSymbols.push(i);
            }
        }
        noSymbols.reverse();
        for (var i in symbols) {
            if (!symbols[i]) {
                symbols[i] = noSymbols.shift();
            }
        }
        result.push(symbols.join(''));
    });
    return result.join(' ');
}
console.log(revert('s1tar3t 2 hellow'));
console.log(revert('s1ta$%r3t 2 hel^low'));
console.log(revert('s1tar3t 2   low5'));
//# sourceMappingURL=task.js.map