type ExcludedSymbol = {
  symbol:string,
  index:number
};

let excludeSymbols = function(chars:string[]):ExcludedSymbol[] {
  let result:ExcludedSymbol[] = [];
  chars.forEach(function(item:string, index:number) {
    if (!/[a-zA-Z]/.test(item)) {
      result.push({
        symbol: item,
        index: index
      })
    }
  });
  return result;
};

let includeSymbols = function(word:string, symbols:ExcludedSymbol[]):string {
  let result:string = word;
  symbols.forEach(function(item:ExcludedSymbol) {
    result = result.slice(0, item.index) + item.symbol + result.slice(item.index);
  });
  return result;
};

let reverseWord = function(word:string):string {
  let chars:string[] = word.split('');
  let excludedSymbols:ExcludedSymbol[] = excludeSymbols(chars);
  let excludedWord:string = word.replace(/[^a-zA-Z]/g, '');
  let reversedWord:string = excludedWord.split('').reverse().join('');
  let includedWord:string = includeSymbols(reversedWord, excludedSymbols);
  return includedWord;
};

let reverse = function(str:string):string {
  let result:string = '';
  let strArr:string[] = str.split(' ');
  result = strArr.map(function(item:string) {
    return reverseWord(item);
  }).join(' ');
  return result;
};

console.log(reverse('s1tar3t 2 hellow') === 't1rat3s 2 wolleh');
console.log(reverse('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh');
console.log(reverse('s1tar3t 2   low5') === 't1rat3s 2   wol5');