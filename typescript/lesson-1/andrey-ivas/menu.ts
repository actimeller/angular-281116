type items = {title:string}[];
type animals = {title:string, items?:{title?:string, items:items}[]}[];
const menuList:animals = [
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

class Menu {
    private elemClass:string;
    private obj:animals;
    private element:any;

    public constructor(className:string, menuObj:animals) {
        this.elemClass = className;
        this.obj = menuObj;
    }
    public init(){
        let menu:any = document.querySelector(`.${this.elemClass}`);
        menu.appendChild(this.getElem());
        this.element = document.querySelectorAll(`.menu .title`);
        menu.addEventListener('click', (e:Event):void=>{
            e.stopPropagation();
            let elem:any = e.target as HTMLElement;
            elem.parentNode.classList.toggle('menu-open');
        });
    }
    public open(label:string):void {
        let element:any = this.element as HTMLElement;
        for(let i=0; i < element.length; i++){
            if(element[i].dataset.label == label) {
                element[i].parentNode.classList.add('menu-open');
            }
        }
    }
    public close(label:string):void {
        let element:any = this.element as HTMLElement;
        for(let i=0; i < element.length; i++){
            if(element[i].dataset.label == label) {
                element[i].parentNode.classList.remove('menu-open');
            }
        }
    }
    public toggle(label:string):void {
        let element:any = this.element as HTMLElement;
        for(let i=0; i < element.length; i++){
            if(element[i].dataset.label == label) {
                element[i].parentNode.classList.toggle('menu-open');
            }
        }
    }


    private getElem():HTMLElement{
        let inner:string = '';
        let menu:HTMLElement;

        for (let key in this.obj) {
            inner += this.getTemplate(this.obj[key]);
        }
        menu = document.createElement('ul');
        menu.innerHTML = `${inner}`;

        return  menu;

    }
    private getTemplate(current:any):string{
        let template: string = '';

        if('items' in current){
            for(let i=0; i < current.items.length; i++){
                template += this.getTemplate(current.items[i]);
            }
            template = `<ul>${template}</ul>`;
        }
        template = `
          <li class="">
            <a class="title" href="#" data-label="${current.title}">${current.title}</a>
            ${template}
          </li>
        `;

        return template;
    }
}

let menu = new Menu('menu', menuList);
menu.init();

let button1:HTMLElement,
    button2:HTMLElement,
    button3:HTMLElement;

button1 = document.getElementById('id1');
button2 = document.getElementById('id2');
button3 = document.getElementById('id3');

button1.addEventListener('click', ():void => {menu.close('Животные')});
button2.addEventListener('click', ():void => {menu.open('Животные')});
button3.addEventListener('click', ():void => {menu.toggle('Животные')});
