var getUnique = function (arr) {
    var resultArr = [];
    arr.forEach(function (item) {
        if (resultArr.indexOf(item) === -1) {
            resultArr.push(item);
        }
    });
    return resultArr;
};
console.log(getUnique(['a', 2, 1, 2, 'a', 'b'])); //['a', 2, 1, 'b']
