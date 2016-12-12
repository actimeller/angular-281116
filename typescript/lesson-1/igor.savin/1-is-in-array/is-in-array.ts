let isInArray = function(arr:any[], arg:any, ...restArgs:any[]): boolean {
  let result: boolean = true;
  restArgs.push(arg);
  restArgs.forEach(function(item:any) {
    if (arr.indexOf(item) === -1) {
      result = false;
    }
  });
  return result;
};

console.log(isInArray([1,'s', null], 1)); //true
console.log(isInArray([1,'s', null], 's', null)); //true
console.log(isInArray([1,'s', null], 's', null, 1)); //true
console.log(isInArray([1,'s', null], 's', null, 1, 2)); //false