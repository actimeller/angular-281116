let getUnique = function(arr:any[]):any[] {
  let resultArr:any[] = [];
  arr.forEach(function(item:any) {
    if (resultArr.indexOf(item) === -1) {
      resultArr.push(item);
    }
  });
  return resultArr;
};

console.log(getUnique(['a', 2, 1, 2, 'a', 'b'])); //['a', 2, 1, 'b']