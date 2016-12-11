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
var Menu = (function () {
    function Menu(el, items) {
        var _this = this;
        this.el = el;
        this.items = items;
        this.render(el, items);
        el.addEventListener('click', function (event) {
            var submenu = event.target.children[0];
            if (submenu) {
                _this.toggle(submenu);
            }
        });
    }
    Menu.prototype.toggle = function (element) {
        if (element.style.display === 'block') {
            this.close(element);
            return;
        }
        this.open(element);
    };
    Menu.prototype.close = function (element) {
        element.style.display = 'none';
    };
    Menu.prototype.open = function (element) {
        element.style.display = 'block';
    };
    Menu.prototype.getElem = function () {
        return this.el;
    };
    Menu.prototype.render = function (el, items) {
        var menu = createMenuSections(items);
        el.appendChild(menu);
        function createMenuSections(list) {
            var ul = document.createElement('ul');
            list.forEach(function (item) {
                var li = document.createElement('li');
                li.innerText = item.title;
                if (item.items) {
                    li.appendChild(createMenuSections(item.items));
                }
                ul.appendChild(li);
            });
            return ul;
        }
    };
    return Menu;
}());
var menu = new Menu(document.getElementsByClassName('menu')[0], menuList);
