//1
function isInArray(arr) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (arr.length != rest.length) {
        return false;
    }
    var newArr = rest.filter(function (elem) {
        for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
            var item = arr_1[_i];
            if (elem === item) {
                return true;
            }
        }
    });
    if (newArr.length === rest.length) {
        return true;
    }
    return false;
}
//2
var summator = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var result = args.reduce(function (sum, current) {
        if (typeof current === 'string') {
            return Number(sum) + Number(current);
        }
        else if (typeof current === 'number') {
            return Number(sum) + current;
        }
    }, 0);
    return Number(result);
};
//3
var getUnique = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i - 0] = arguments[_i];
    }
    var result = [args[0]];
    for (var i = 1; i < args.length; i++) {
        for (var j = 0, len = result.length; j < len; j++) {
            if (args[i] !== result[j] && j === len - 1) {
                result.push(args[i]);
            }
            else if (args[i] === result[j]) {
                break;
            }
        }
    }
    return result;
};
//4
function reverse(str) {
    var arr = str.split(/\s/);
    var reg = /[a-zA-Z]/;
    var result = '';
    var tmp = [];
    var nums = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            if (arr[i][j].match(reg)) {
                tmp.unshift(arr[i][j]);
            }
            else {
                nums.push({ pos: j, val: arr[i][j] });
            }
        }
        nums.forEach(function (item) {
            tmp.splice(item.pos, 0, item.val);
        });
        result += tmp.join('') + ' ';
        tmp = [];
        nums = [];
    }
    return result.trim();
}
var Menu = (function () {
    function Menu(menuList) {
        var _this = this;
        this.menuList = menuList;
        this.innerFunc = function (arr) {
            var _self = _this;
            var ul = document.createElement('ul');
            arr.forEach(function (item) {
                if (item.items) {
                    var li = document.createElement('li');
                    var a = document.createElement('a');
                    a.innerHTML = item.title;
                    a.classList.add('title');
                    li.appendChild(a);
                    li.classList.add('menu-open');
                    li.appendChild(_self.innerFunc(item.items));
                    ul.appendChild(li);
                    return ul;
                }
                else {
                    var li = document.createElement('li');
                    li.innerHTML = item.title;
                    ul.appendChild(li);
                }
            });
            return ul;
        };
        this.menuList = menuList;
    }
    Menu.prototype.getElem = function () {
        var elem = document.createDocumentFragment();
        elem.appendChild(this.innerFunc(menuList));
        return elem;
    };
    Menu.prototype.open = function (elem) {
        if (elem.parentElement.className === 'menu-open') {
            elem.parentElement.lastChild.style.display = 'block';
        }
    };
    Menu.prototype.close = function (elem) {
        if (elem.parentElement.className === 'menu-open') {
            elem.parentElement.lastChild.style.display = 'none';
        }
    };
    Menu.prototype.toggle = function (elem) {
        if (elem.parentElement.className === 'menu-open') {
            if (elem.parentElement.lastChild.style.display === 'none') {
                elem.parentElement.lastChild.style.display = 'block';
            }
            else {
                elem.parentElement.lastChild.style.display = 'none';
            }
        }
    };
    return Menu;
}());
var menu = new Menu(menuList);
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
