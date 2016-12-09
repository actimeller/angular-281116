// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.
function isInArray(array) {
    var numberArray = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numberArray[_i - 1] = arguments[_i];
    }
    for (var _a = 0, numberArray_1 = numberArray; _a < numberArray_1.length; _a++) {
        var e = numberArray_1[_a];
        if (array.indexOf(e) == -1) {
            return false;
        }
    }
    return true;
}
var isInArray_btn = document.createElement('button');
isInArray_btn.textContent = "isInArray";
isInArray_btn.onclick = function () {
    alert('Data: [1,2,3,4], 1,2,3,4 isInArray:' + isInArray([1, 2, 3, 4], 1, 2, 3, 4)
        + '\n\r Data: [1,2,3,4], 1,2,3,4,5 isInArray:' + isInArray([1, 2, 3, 4], 1, 2, 3, 4, 5));
};
document.body.appendChild(isInArray_btn);
