function summator(arg) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var result;
    args.unshift(arg);
    if (typeof arg === 'number') {
        result = args.reduce(function (total, item) {
            return total + item;
        });
    }
    if (typeof arg === 'string') {
        result = args.reduce(function (total, item) {
            return total + item;
        });
    }
    return result;
}
;
console.log(summator(1, 2, 3)); //6
console.log(summator('a', 'b')); //ab
