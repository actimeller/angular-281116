// 4)
//    Написать функцию котороя будет разворачивать буквы в словах предложения, но только лишь буквы
//    цифры и специальные символы должны остаться на месте
//       s1tar3t 2 hellow  ->  t1rat3s 2 wolleh
//       s1ta$%r3t 2 hel^low  ->  t1ra$%t3s 2 wol^leh
//       s1tar3t 2   low5  ->  t1rat3s 2   wol5
function isLetter(s) {
    var re = '[а-яА-ЯA-Za-z]+';
    return s.search(re) != -1;
}
function reverse(str) {
    var reversed, word, letter;
    var symbols, special;
    var wordList, wordListReverse = [], wordReverse;
    wordList = str.split(' ');
    for (var i = 0; i < wordList.length; i++) {
        word = wordList[i];
        symbols = [];
        special = [];
        for (var j = 0; j < word.length; j++) {
            letter = word.charAt(j);
            if (isLetter(letter)) {
                symbols.push(j);
            }
            else {
                special.push(j);
            }
        }
        symbols = symbols.reverse();
        wordReverse = '';
        for (var j = 0, sy = 0, sp = 0; j < word.length; j++) {
            if (special.indexOf(j) == -1) {
                wordReverse += word.charAt(symbols[sy++]);
            }
            else {
                wordReverse += word.charAt(special[sp++]);
            }
        }
        wordListReverse.push(wordReverse);
    }
    return wordListReverse.join(' ');
}
var list, reversed = [];
list = ['s1tar3t 2 hellow', 's1ta$%r3t 2 hel^low', 's1tar3t 2   low5'];
for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
    var e = list_1[_i];
    reversed.push(e + ' => ' + reverse(e));
}
var reverse_btn = document.createElement('button');
reverse_btn.textContent = "reverseLetters";
reverse_btn.onclick = function () {
    alert(reversed.join('\n\r'));
};
document.body.appendChild(reverse_btn);
