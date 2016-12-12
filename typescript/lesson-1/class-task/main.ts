let menuList = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Собаки'},
                    {title: 'Тигры'}
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'},
                    {title: 'Ящерицы'},
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
                    {title: 'Гуппи'},
                    {title: 'Скалярии'}
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'}
                ]
            }
        ]
    }
];
interface IItem {
    title:string
    items?: IItem[]
}

class Menu {

    constructor(public el:Element, private items: IItem[]) {
        this.render(el, items);
        el.addEventListener('click', (event:any) => {
            var submenu:(HTMLUListElement | void) = event.target.children[0];

            if(submenu) {
                this.toggle(submenu);
            }

        })
    }

    public toggle(element:HTMLUListElement) {

        if(element.style.display === 'block') {
            this.close(element);
            return;
        }
        this.open(element);
    }

    private close(element:HTMLUListElement) {
        element.style.display = 'none';
    }

    private open(element:HTMLUListElement) {
        element.style.display = 'block';
    }

    public getElem() {
        return this.el;
    }

    private render(el:Element, items: IItem[]) {

        let menu = createMenuSections(items);

        el.appendChild( menu );

        function createMenuSections( list:IItem[] ):HTMLUListElement {
            let ul:HTMLUListElement = document.createElement('ul');

            list.forEach(item => {
                let li:HTMLLIElement = document.createElement('li');
                li.innerText = item.title;

                if(item.items) {
                    li.appendChild( createMenuSections(item.items) );
                }

                ul.appendChild(li);
            });

            return ul;
        }
    }
}

let menu = new Menu(document.getElementsByClassName('menu')[0], menuList);