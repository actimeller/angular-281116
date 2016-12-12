/*
 * 1
 */
function isInArray(arr:any[], ...args:any[]): boolean {

    return args.every(arg => arr.indexOf(arg) !== -1);

}
console.log(isInArray([1,2], 'test',2,3,'4'));
console.log(isInArray([1, 2], '1', 2));
console.log(isInArray([1, 2], 1, 2));
