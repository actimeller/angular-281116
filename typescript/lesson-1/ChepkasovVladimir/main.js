// import {Menu} from './menuClass'
function isString(item) {
    if (typeof item === 'string') {
        // TS понимает item=string;
        return true;
    }
    return false;
}
function isElement(item) {
    if (typeof item === 'object' && item instanceof Element) {
        return true;
    }
    return false;
}
var Menu = (function () {
    function Menu(menuItems) {
        this.items = menuItems;
    }
    Menu.prototype.getTemplate = function (object, path) {
        var template = '', id = '';
        if (path.length > 0) {
            id = path + '-' + object.title;
        }
        else {
            id = object.title;
        }
        ;
        id = id.replace(' ', '-');
        if ('items' in object) {
            for (var i = 0; i < object.items.length; i++) {
                template += this.getTemplate(object.items[i], id);
            }
            ;
            template = "<ul>" + template + "</ul>";
        }
        ;
        template = "\n      <li class=\"\" id=\"" + id + "\">\n        <a class=\"title\" href=\"#\" data-label=\"" + id + "\">" + object.title + "</a>\n        " + template + "\n      </li>\n      ";
        return template;
    };
    Menu.prototype.getElem = function () {
        var _this = this;
        var template = '';
        for (var i = 0; i < this.items.length; i++) {
            template += this.getTemplate(this.items[i], '');
        }
        ;
        this.ul = document.createElement('ul');
        this.ul.innerHTML = template;
        this.ul.onclick = function (event) { return _this.onClick(event, _this); };
        return this.ul;
    };
    Menu.prototype.onClick = function (event, menu) {
        var label = event.target.getAttribute('data-label');
        var result = false;
        if (isString(label)) {
            menu.toggle(label);
        }
        return false;
    };
    Menu.prototype.toggle = function (label) {
        var element = this.ul.querySelector("#" + label);
        if (isElement(element)) {
            element.classList.toggle('menu-open');
        }
    };
    Menu.prototype.close = function (label) {
        var element = this.ul.querySelector('#' + label);
        if (isElement(element)) {
            element.classList.remove('menu-open');
        }
    };
    Menu.prototype.open = function (label) {
        var element = this.ul.querySelector('#' + label);
        if (isElement(element)) {
            element.classList.add('menu-open');
        }
    };
    return Menu;
}());
var menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    { title: 'Коровы' },
                    { title: 'Ослы' },
                    { title: 'Собаки' },
                    { title: 'Тигры' }
                ]
            },
            {
                title: 'Другие',
                items: [
                    { title: 'Змеи' },
                    { title: 'Птицы' },
                    { title: 'Ящерицы' },
                ],
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    { title: 'Гуппи' },
                    { title: 'Скалярии' }
                ]
            },
            {
                title: 'Форель',
                items: [
                    { title: 'Морская форель' }
                ]
            }
        ]
    }
];
var menuInst = new Menu(menuList);
var elements = document.querySelectorAll('nav.menu');
for (var i = 0; i < elements.length; i++) {
    elements[i].appendChild(menuInst.getElem());
}
