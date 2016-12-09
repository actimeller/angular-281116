// Task #1
function isInArray(array) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    var result = true;
    rest.map(function (val) {
        if (!array.some(function (element) { return element === val; })) {
            result = false;
        }
    });
    return result;
}
// Task #2
function summator() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var sum = rest.reduce(function (a, b) {
        return (parseInt(a.toString()) || 0) + (parseInt(b.toString()) || 0);
    }, 0);
    return parseInt(sum.toString());
}
// Task #3
function getUnique() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var result = [];
    rest.map(function (element) {
        if (!result.some(function (addedElement) { return addedElement === element; })) {
            result.push(element);
        }
    });
    return result;
}
// Task #4
function reverseString(str) {
    var letterRegex = /[a-zA-Z]/g;
    return str.split(' ').map(function (word) {
        var letterArray = [];
        var regexResult = word.match(letterRegex);
        regexResult && regexResult.map(function (result) { return letterArray.push(result); });
        letterArray.reverse();
        word.split('').map(function (symbol, index) {
            if (!letterArray.some(function (letter) { return letter === symbol; })) {
                letterArray.splice(index, 0, symbol);
            }
        });
        return letterArray.join('');
    }).join(' ');
}
