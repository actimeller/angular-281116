/*
 * 2
 */
function summator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    return args.reduce(function (previousValue, currentValue) {
        var previous, current;
        if (typeof previousValue === 'string') {
            previous = parseInt(previousValue) || 0;
        }
        else {
            previous = previousValue;
        }
        if (typeof currentValue === 'string') {
            current = parseInt(currentValue) || 0;
        }
        else {
            current = currentValue;
        }
        return previous + current;
    });
}
console.log(summator(1, 2, 3, '4', 'ggg'));
