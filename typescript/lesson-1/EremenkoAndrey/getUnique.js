/*
 * 3
 */
function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i - 0] = arguments[_i];
    }
    var newArr = [];
    arr.forEach(function (el) {
        if (!~newArr.indexOf(el)) {
            newArr.push(el);
        }
    });
    return newArr;
}
console.log(getUnique(1, 2, 1, 'f', 6, 'f', 58));
