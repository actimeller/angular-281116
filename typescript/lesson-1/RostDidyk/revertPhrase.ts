function isString(item: string): boolean {
    return isNaN(parseInt(item));
}

function isSpecialChars(item: string): boolean {
    let query  =  /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return !!(item.match(query))
}

function revert(phrase: string): string {
    let words : string[] = phrase.split(/(\s+)/);

    let reversWords: string[] = words.map(word=>{
        let chars: string[] = word.split('');
        let result: string[] = new Array(chars.length);

        for(let i = 0; i < chars.length; i++) {
           if (isString(chars[i]) && !isSpecialChars(chars[i])) {
               let opponentIndex: number = (result.length -1) - i;
               result[ isSpecialChars(chars[opponentIndex]) ? i : opponentIndex ] = chars[i];
           } else {
               result[i] = chars[i];
           }
        }

        return result.join('');
    });

    return reversWords.join('');
}

console.log(revert('s1tar3t 2 hellow')); //t1rat3s 2 wolleh
console.log(revert('s1ta$%r3t 2 hel^low')); //t1ra$%t3s 2 wol^leh