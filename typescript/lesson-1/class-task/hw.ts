//1
function isInArray(arr:(string|number|boolean)[], ...rest) : boolean {
    if(arr.length != rest.length) {
        return false;
    }
    let newArr = rest.filter(function(elem) {
        for(let item of arr) {
            if(elem === item) {
                return true;
            }
        }
    });
    if(newArr.length === rest.length) {
        return true;
    }
    return false;
}

//2
const summator = (...args:(string|number)[]):number => {
    let result = args.reduce((sum, current) => {
        if(typeof current === 'string') {
            return Number(sum) + Number(current);
        } else if(typeof current === 'number') {
            return Number(sum) + current;
        }

    }, 0);
    return Number(result);
}

//3
const getUnique = (...args: any[]) => {
    let result: any[] = [args[0]];
    for (let i = 1; i < args.length; i++) {
        for (let j = 0, len = result.length; j < len; j++) {
            if (args[i] !== result[j] && j === len - 1) {
                result.push(args[i]);
            } else if (args[i] === result[j]) {
                break;
            }
        }
    }
    return result;
}

//4
function reverse(str:string) : string {
    const arr = str.split(/\s/);
    const reg = /[a-zA-Z]/;
    let result = '';
    let tmp = [];
    let nums = [];
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j].match(reg)) {
                tmp.unshift(arr[i][j]);
            } else {
                nums.push({ pos: j, val : arr[i][j] });
            }
        }
        nums.forEach((item) => {
            tmp.splice(item.pos, 0, item.val);
        });
        result += tmp.join('') + ' ';
        tmp = [];
        nums = [];
    }

    return result.trim();
}

//5
interface Controls {
    getElem();
    open(elem:any):void;
    close(elem:any):void;
    toggle(elem:any):void;
}


class Menu implements Controls {

    constructor(private menuList:{}) {
        this.menuList = menuList;
    }

    public getElem () {
        let elem = document.createDocumentFragment();

        elem.appendChild(this.innerFunc(menuList));
        return elem;

    }

    private innerFunc = (arr) => {
         let _self = this;
         let ul = document.createElement('ul');

        arr.forEach(function(item) {
            if(item.items) {
                let li = document.createElement('li');
                let a = document.createElement('a');
                a.innerHTML = item.title;
                a.classList.add('title');
                li.appendChild(a);
                li.classList.add('menu-open');
                li.appendChild(_self.innerFunc(item.items));
                ul.appendChild(li);
                return ul;
            } else {
                let li = document.createElement('li');
                li.innerHTML = item.title;
                ul.appendChild(li);
            }
        })
        return ul;
    }

    public open(elem) {
        if(elem.parentElement.className === 'menu-open') {
            elem.parentElement.lastChild.style.display = 'block';
        }
    }

    public close(elem) {
        if(elem.parentElement.className === 'menu-open') {
            elem.parentElement.lastChild.style.display = 'none';
        }
    }

    public toggle(elem) {
        if(elem.parentElement.className === 'menu-open') {
            if (elem.parentElement.lastChild.style.display === 'none') {
                elem.parentElement.lastChild.style.display = 'block';
            } else {
                elem.parentElement.lastChild.style.display = 'none';
            }
        }
    }
}

let menu = new Menu(menuList);


// function isString(value:any):boolean {
//     if(typeof value === 'string') {
//         return true;
//     }
//     return false;
// }
//
// function isNumber(value:any):boolean {
//     if(typeof value === 'number') {
//         return true;
//     }
//     return false;
// }
//
// function isBool(value:any):boolean {
//     if(typeof value === 'bool') {
//         return true;
//     }
//     return false;
// }