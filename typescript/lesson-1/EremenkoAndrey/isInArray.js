/*
 * 1
 */
function isInArray(arr) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args.every(function (arg) { return arr.indexOf(arg) !== -1; });
}
console.log(isInArray([1, 2], 'test', 2, 3, '4'));
console.log(isInArray([1, 2], '1', 2));
console.log(isInArray([1, 2], 1, 2));
