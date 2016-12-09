// 1)
//   Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
//   Возвращает true, если все аргументы, кроме первого входят в первый.
//   Первым всегда должен быть массив.

function isInArray(array:any[], ...numberArray: any[]): boolean {
  for (let e of numberArray) {
    if (array.indexOf(e) == -1){
      return false;
    }
  }
  return true;
}

let isInArray_btn = document.createElement('button');
isInArray_btn.textContent = "isInArray";
isInArray_btn.onclick = function() {
    alert('Data: [1,2,3,4], 1,2,3,4 isInArray:' + isInArray([1,2,3,4], 1,2,3,4)
        + '\n\r Data: [1,2,3,4], 1,2,3,4,5 isInArray:' + isInArray([1,2,3,4], 1,2,3,4,5)
  );
}
document.body.appendChild(isInArray_btn);
