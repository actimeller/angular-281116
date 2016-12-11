var excludeSymbols = function (chars) {
    var result = [];
    chars.forEach(function (item, index) {
        if (!/[a-zA-Z]/.test(item)) {
            result.push({
                symbol: item,
                index: index
            });
        }
    });
    return result;
};
var includeSymbols = function (word, symbols) {
    var result = word;
    symbols.forEach(function (item) {
        result = result.slice(0, item.index) + item.symbol + result.slice(item.index);
    });
    return result;
};
var reverseWord = function (word) {
    var chars = word.split('');
    var excludedSymbols = excludeSymbols(chars);
    var excludedWord = word.replace(/[^a-zA-Z]/g, '');
    var reversedWord = excludedWord.split('').reverse().join('');
    var includedWord = includeSymbols(reversedWord, excludedSymbols);
    return includedWord;
};
var reverse = function (str) {
    var result = '';
    var strArr = str.split(' ');
    result = strArr.map(function (item) {
        return reverseWord(item);
    }).join(' ');
    return result;
};
console.log(reverse('s1tar3t 2 hellow') === 't1rat3s 2 wolleh');
console.log(reverse('s1ta$%r3t 2 hel^low') === 't1ra$%t3s 2 wol^leh');
console.log(reverse('s1tar3t 2   low5') === 't1rat3s 2   wol5');
