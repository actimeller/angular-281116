"use strict";
var InstantMenu = (function () {
    function InstantMenu(rootSelector, items) {
        var _this = this;
        this.rootSelector = rootSelector;
        this.items = items;
        this.clickHandler = function (ev) {
            var target = ev.target;
            if (target.tagName.toLowerCase() === 'li') {
                _this.toggle(target.textContent);
                ev.stopPropagation();
            }
        };
    }
    InstantMenu.prototype.toggle = function (label) {
        if (this.root) {
            var elem = Array.from(this.root.querySelectorAll('li')).filter(function (el) { return (el.textContent === label); });
            if (elem.length > 0) {
                this.internalToggle(elem[0]);
            }
        }
    };
    InstantMenu.prototype.internalToggle = function (elem) {
        var test = elem.classList.contains('menu-open');
        if (!test)
            elem.classList.add('menu-open');
        else
            elem.classList.remove('menu-open');
    };
    InstantMenu.prototype.mount = function () {
        if (this.root)
            throw new Error('Already mounted');
        var r = document.querySelector(this.rootSelector);
        if (!r)
            throw new Error("The root was not found: " + this.rootSelector);
        this.root = r;
        r.addEventListener('click', this.clickHandler);
        var menuHost = document.createElement('ul');
        r.appendChild(menuHost);
        this.populate(menuHost, this.items);
    };
    InstantMenu.prototype.populate = function (host, items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var li = document.createElement('li');
            host.appendChild(li);
            var title = document.createTextNode(item.title);
            li.appendChild(title);
            if (item.items && item.items.length > 0) {
                var newHost = document.createElement('ul');
                li.appendChild(newHost);
                this.populate(newHost, item.items);
            }
        }
    };
    InstantMenu.prototype.destroy = function () {
        if (!this.root)
            throw new Error('Was not mounted');
        this.root.removeEventListener('click', this.clickHandler);
        this.root.removeChild(document.querySelector('li:first-child'));
        this.root = null;
    };
    return InstantMenu;
}());
new InstantMenu('nav.menu', menuList).mount();
//# sourceMappingURL=menu.js.map