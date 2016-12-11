function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.reduce(function (a, b) {
        return a + b;
    });
}
console.log(summator('a', 'b', 'c')); //abc
console.log(summator(1, 2, 3)); //6
console.log(summator('1', '2', '3')); //123
