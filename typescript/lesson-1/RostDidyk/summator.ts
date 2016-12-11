function summator<T extends string|number>(...args:T[]): T;

function summator(...args:(any)[]) {
    return args.reduce((a,b) => {
        return a+b;
    })
}

console.log(summator<string>('a', 'b', 'c')); //abc
console.log(summator<number>(1, 2, 3)); //6
console.log(summator<string>('1', '2', '3')); //123