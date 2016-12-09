// 3)
//   Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
//   и возвращает массив уникальных элементов. Аргумент не должен изменяться.
//   Порядок элементов результирующего массива должен совпадать с порядком,
//   в котором они встречаются в оригинальной структуре.

// TODO:  аргумент не должен изменяться
function getUnique<T>(...arr:Array<T>):T[] {
  let out:Array<T> = [];
  for(let e of arr){
    if(out.indexOf(e) == -1){
      out.push(e);
    }
  }
  return out;
}


let getUnique_btn = document.createElement('button');
getUnique_btn.textContent = "getUnique";
getUnique_btn.onclick = function() {
    alert('Data: 1,2,3,4,5,"6",5,3,"6" getUnique:' + getUnique<any>(1,2,3,4,5,'6',5,3,'6'));
}
document.body.appendChild(getUnique_btn);
