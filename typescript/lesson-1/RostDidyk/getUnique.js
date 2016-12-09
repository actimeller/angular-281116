function checkPosition(item, pos, self) {
    return self.indexOf(item) == pos;
}
function getUnique() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(checkPosition);
}
console.log(getUnique(1, 2, 3, 'test', 1, 2, 3, 't', '3')); // [ 1, 2, 3, 'test', 't', '3' ]
