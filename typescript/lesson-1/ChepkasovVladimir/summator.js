function isNumber(e) {
    if (typeof e === 'number')
        return true;
    return false;
}
function summator() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i - 0] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, arg_1 = arg; _a < arg_1.length; _a++) {
        var e = arg_1[_a];
        if (isNumber(e)) {
            sum += e;
        }
        else {
            sum += parseInt(e);
        }
    }
    return sum;
}
var summator_btn = document.createElement('button');
summator_btn.textContent = "summator";
summator_btn.onclick = function () {
    alert("Data: 1,'2',3,'4' Sum:" + summator(1, '2', 3, '4'));
};
document.body.appendChild(summator_btn);
