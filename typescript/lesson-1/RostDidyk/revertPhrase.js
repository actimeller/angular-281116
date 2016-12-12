function isString(item) {
    return isNaN(parseInt(item));
}
function isSpecialChars(item) {
    var query = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;
    return !!(item.match(query));
}
function revert(phrase) {
    var words = phrase.split(/(\s+)/);
    var reversWords = words.map(function (word) {
        var chars = word.split('');
        var result = new Array(chars.length);
        for (var i = 0; i < chars.length; i++) {
            if (isString(chars[i]) && !isSpecialChars(chars[i])) {
                var opponentIndex = (result.length - 1) - i;
                result[isSpecialChars(chars[opponentIndex]) ? i : opponentIndex] = chars[i];
            }
            else {
                result[i] = chars[i];
            }
        }
        return result.join('');
    });
    return reversWords.join('');
}
console.log(revert('s1tar3t 2 hellow')); //t1rat3s 2 wolleh
console.log(revert('s1ta$%r3t 2 hel^low')); //t1ra$%t3s 2 wol^leh
