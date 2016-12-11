/*
 * 3
 */

function getUnique(...arr:any[]):any[]{
    var newArr:any[] = [];
    arr.forEach(el => {
        if(!~newArr.indexOf(el)){
            newArr.push(el);
        }
    });
    return newArr;
}
console.log(getUnique(1,2,1,'f',6,'f',58));
