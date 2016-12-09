// 2)
//  писать функцию summator(), которая сумирует переданые ей аргументы.
//  Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено

function isNumber(e: (string | number)): e is number {
    if (typeof e === 'number') return true;
    return false;
}

function summator(...arg: (number | string)[]): number {
    let sum: number = 0;
    for (let e of arg) {
        if (isNumber(e)) {
            sum += e;
        } else {
            sum += parseInt(e);
        }
    }

    return sum;
}

let summator_btn = document.createElement('button');
summator_btn.textContent = "summator";
summator_btn.onclick = function() {
    alert("Data: 1,'2',3,'4' Sum:" + summator(1,'2',3,'4'));
}
document.body.appendChild(summator_btn);
