function getUnique() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i - 0] = arguments[_i];
    }
    var out = [];
    for (var _a = 0, arr_1 = arr; _a < arr_1.length; _a++) {
        var e = arr_1[_a];
        if (out.indexOf(e) == -1) {
            out.push(e);
        }
    }
    return out;
}
var getUnique_btn = document.createElement('button');
getUnique_btn.textContent = "getUnique";
getUnique_btn.onclick = function () {
    alert('Data: 1,2,3,4,5,"6",5,3,"6" getUnique:' + getUnique(1, 2, 3, 4, 5, '6', 5, 3, '6'));
};
document.body.appendChild(getUnique_btn);
