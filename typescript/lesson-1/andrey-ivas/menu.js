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
/*
 Реализуйте класс с менюшкой и  публичные методы
 getElem -возвращает елемент в котором генерится меню;
 toggle открыть/закрыть элемент меню по метке;
 close закрыть элемент меню по метке;
 open открыть элемент меню по метке
*/
var Menu = (function () {
    function Menu(className, menuObj) {
        this.elemClass = className;
        this.obj = menuObj;
    }
    Menu.prototype.init = function () {
        var menu = document.querySelector("." + this.elemClass);
        menu.appendChild(this.getElem());
        this.element = document.querySelectorAll(".menu .title");
        menu.addEventListener('click', function (e) {
            e.stopPropagation();
            var elem = e.target;
            elem.parentNode.classList.toggle('menu-open');
        });
    };
    Menu.prototype.open = function (label) {
        var element = this.element;
        for (var i = 0; i < element.length; i++) {
            if (element[i].dataset.label == label) {
                element[i].parentNode.classList.add('menu-open');
            }
        }
    };
    Menu.prototype.close = function (label) {
        var element = this.element;
        for (var i = 0; i < element.length; i++) {
            if (element[i].dataset.label == label) {
                element[i].parentNode.classList.remove('menu-open');
            }
        }
    };
    Menu.prototype.toggle = function (label) {
        var element = this.element;
        for (var i = 0; i < element.length; i++) {
            if (element[i].dataset.label == label) {
                element[i].parentNode.classList.toggle('menu-open');
            }
        }
    };
    Menu.prototype.getElem = function () {
        var inner = '';
        var menu;
        for (var key in this.obj) {
            inner += this.getTemplate(this.obj[key]);
        }
        menu = document.createElement('ul');
        menu.innerHTML = "" + inner;
        return menu;
    };
    Menu.prototype.getTemplate = function (current) {
        var template = '';
        if ('items' in current) {
            for (var i = 0; i < current.items.length; i++) {
                template += this.getTemplate(current.items[i]);
            }
            template = "<ul>" + template + "</ul>";
        }
        template = "\n          <li class=\"\">\n            <a class=\"title\" href=\"#\" data-label=\"" + current.title + "\">" + current.title + "</a>\n            " + template + "\n          </li>\n        ";
        return template;
    };
    return Menu;
}());
var menu = new Menu('menu', menuList);
menu.init();
var button1, button2, button3;
button1 = document.getElementById('id1');
button2 = document.getElementById('id2');
button3 = document.getElementById('id3');
button1.addEventListener('click', function () { menu.close('Животные'); });
button2.addEventListener('click', function () { menu.open('Животные'); });
button3.addEventListener('click', function () { menu.toggle('Животные'); });
