
// Task #1

function isInArray(array: (string | number | boolean)[], ...rest: (string | number | boolean)[]): boolean {
    var result = true;
    rest.map(val => {
        if (!array.some(element => element === val)) {
            result = false;
        }
    });

    return result;
}

// Task #2
function summator(...rest: (string | number)[]): number {
    var sum = rest.reduce((a, b) => {
        return (parseInt(a.toString()) || 0) + (parseInt(b.toString()) || 0);
    }, 0);

    return parseInt(sum.toString());
}

// Task #3
function getUnique(...rest: (string | number | boolean)[]):(string | number | boolean)[] {
   var result:(string | number | boolean)[] = [];

   rest.map(element => {
      if (!result.some(addedElement => addedElement === element)) {
         result.push(element);
      }
   });

   return result;
}

// Task #4
function reverseString(str:string):string {
   var letterRegex = /[a-zA-Z]/g;
   return str.split(' ').map(word => {
      var letterArray:string[] = [];

      var regexResult = word.match(letterRegex);
      regexResult && regexResult.map(result => letterArray.push(result));
      letterArray.reverse();

      word.split('').map((symbol, index) => {
         if (!letterArray.some(letter => letter === symbol)) {
           letterArray.splice(index, 0, symbol);
         }
      });

      return letterArray.join('');
   }).join(' ');
}
