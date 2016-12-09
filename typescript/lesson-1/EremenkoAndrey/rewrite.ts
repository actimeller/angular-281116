/*
 * 4
 */

function rewrite(text:string){
    var words:string[] = text.split(' '),
        newWords:string = '';

    words.forEach((word:string):void => {
        var wordLen:number = word.length,
            words:string[] = [],
            symbols:(string)[] = [];
            symbols.length = wordLen;

        for (var i:number = 0; i < wordLen; i++) {
              if(word[i].search(/[a-z]/) === -1) {
                  symbols[i] = word[i];
              } else  {
                  symbols[i] = undefined;
                  words.push(word[i]);
              }
        }
        words.reverse();

        symbols.forEach(function (el:string|void, index:number) {
            if(!el) {
                symbols[index] = words.shift();
            }
        });

        newWords += symbols.join('') + " ";
    });

    return newWords;
}

console.log(rewrite('s1tar3t 2 hellow'));
console.log(rewrite('s1ta$%r3t 2 hel^low'));
console.log(rewrite('s1tar3t 2   low5'));

