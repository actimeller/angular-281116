/*
 Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
 Возвращает true, если все аргументы, кроме первого входят в первый.
 Первым всегда должен быть массив.
 */

type sbn=number|string|boolean;
function isInArray(array: sbn[], ...arg: sbn[]): boolean {
    let flag = true;
    for (let i = 0; i < arg.length; i++) {
        if (array.indexOf(arg[i]) < 0) {
            flag = false;
        }
    }
    return flag;
}
console.log(isInArray([1, 2, 'one'], 1, 'one'));

/*
 писать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено
 */
function getType(elem: any): string {
    let res;
    if (typeof elem === 'string') {
        res = 'string';
    }
    if (typeof elem === 'number') {
        res = 'number';
    }
    return res;
}
function summator(...arg: any[]): string {
    let sum: number = 0;
    for (let i = 0; i < arg.length; i++) {
        let elem = arg[i];
        switch (getType(elem)) {
            case 'string': {
                if (!isNaN(elem)) {
                    sum += parseInt(elem);
                }
                break;
            }
            case 'number': {
                sum += elem;
                break;
            }
            default: {
                sum = 0;
            }
        }
    }
    return `The sum is ${sum}`;
}

console.log(summator(1, 'rr', 2, '2'));

/*
 Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
 и возвращает массив уникальных элементов. Аргумент не должен изменяться.
 Порядок элементов результирующего массива должен совпадать с порядком,
 в котором они встречаются в оригинальной структуре.
 */
function getUnique(...arr: any[]): any[] {
    let res: any = [];
    let k: number = 0;
    for (let i = 0; i < arr.length; i++) {
        let j = 0;
        while (j < k && res[j] !== arr[i]) j++;
        if (j == k) res[k++] = arr[i];
    }
    return res;
}
console.log(getUnique(1, 2, 4, 4, 'one', 5, 'one', false, false));
/*
 Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
 цифры и специальные символы должны остаться на месте
 s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
 s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
 s1tar3t 2   low5  ->  t1rat3s 2   wol5
 */
function reverseLetter(str: string) {
    let main: string[];
    let filtered: string[];

    main = str.split(' ').map(insertLetter);
    console.log(main.join(' '));

    function insertLetter(value: string): string {
        let word: string[] = value.split('');
        filtered = word.filter(isFilter).reverse();
        word.forEach((elem: string, index: number) => {
            if (!elem.match(/\D/)) {
                filtered.splice(index, 0, elem);
            }
        });
        return filtered.join('');
    }

    function isFilter(elem: string): boolean {
        return (elem.match(/\D/)) ? true : false
    }
}
reverseLetter('s1tar3t 2 hellow');