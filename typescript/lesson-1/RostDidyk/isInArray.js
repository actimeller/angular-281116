function isInArray(list) {
    var needle = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        needle[_i - 1] = arguments[_i];
    }
    return needle.every(function (value) {
        var getIndex = list.indexOf(value);
        return (getIndex != -1);
    });
}
console.log(isInArray([1, 2, 3, 4, 5, 6, 7, 8], 7, 'string', 2, 11)); // false
console.log(isInArray([1, 2, 3, 4, 5, 6, 7, 8, 'test'], 7, 6, 2, 'test')); // true
