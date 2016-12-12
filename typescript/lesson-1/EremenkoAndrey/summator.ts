/*
 * 2
 */

function summator(...args:(string|number)[]) {
    return args.reduce((previousValue, currentValue) => {
        var previous:number,
            current:number;

        if(typeof previousValue === 'string') {
            previous = parseInt(previousValue) || 0;
        } else {
            previous = previousValue;
        }
        if(typeof currentValue === 'string') {
            current = parseInt(currentValue) || 0;
        } else {
            current = currentValue;
        }

        return previous + current;
    });
}
console.log(summator(1,2,3,'4', 'ggg'));
