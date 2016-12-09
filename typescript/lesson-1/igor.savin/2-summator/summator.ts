function summator(arg:number, ...args:number[]): number;
function summator(arg:string, ...args:string[]): string;
function summator(arg:(number | string), ...args:(number | string)[]): (number | string) {
  let result;
  args.unshift(arg);
  if (typeof arg === 'number') {
    result = args.reduce(function(total:number, item:number) {
      return total + item;
    });
  }
  if (typeof arg === 'string') {
    result = args.reduce(function(total:string, item:string) {
      return total + item;
    });
  }
  return result;
};

console.log(summator(1, 2, 3)); //6
console.log(summator('a', 'b')); //ab