// import {Menu} from './menuClass'

function isString(item:any): item is string{
        if (typeof item === 'string') {
            // TS понимает item=string;
           return true;
        }
        return false;
}

function isElement(item:any): item is Element{

  if (typeof item === 'object' && item instanceof Element) {
     return true;
  }
  return false;
}

class Menu {
    private items:Array<any>;
    private ul:HTMLElement;

    private getTemplate(object:any, path:string):string{
      let template:string = '', id:string ='';
      if(path.length > 0){
        id = path + '-' + object.title;
      } else {
        id = object.title;
      };
      id = id.replace(' ', '-');

      if('items' in object){
        for(let i=0; i < object.items.length; i++){
          template += this.getTemplate(object.items[i], id);
        };

        template = `<ul>${template}</ul>`;
      };
      template = `
      <li class="" id="${id}">
        <a class="title" href="#" data-label="${id}">${object.title}</a>
        ${template}
      </li>
      `
      return template
    }

    public getElem():HTMLElement{
      let template:string = '';
      for(let i=0; i < this.items.length; i++){
        template += this.getTemplate(this.items[i], '');
      };
      this.ul = document.createElement('ul');
      this.ul.innerHTML = template;
      this.ul.onclick = (event:Event) => this.onClick(event, this);
      return this.ul;
    }
    private onClick(event:Event, menu:Menu):boolean{
      let label:any = ( event.target as HTMLElement).getAttribute('data-label');
      let result:boolean = false;

      if(isString(label)){
        menu.toggle(label);
      }

      return false;
    }

    public toggle(label:string):void{
      let element:any = this.ul.querySelector(`#${label}`);
      if(isElement(element)){
        element.classList.toggle('menu-open');
      }
    }

    public close(label:string){
      let element:any = this.ul.querySelector('#' + label);
      if(isElement(element)){
        element.classList.remove('menu-open');
      }
    }
    public open(label:string){
      let element:any = this.ul.querySelector('#' + label);
      if(isElement(element)){
        element.classList.add('menu-open');
      }
    }
    public constructor(menuItems:Array<any>) {
      this.items = menuItems;
    }
}

type menuList = {title:string,items?:menuList}[]

let menuList:menuList = [
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

let menuInst:Menu = new Menu(menuList);
let elements = document.querySelectorAll('nav.menu');
for(let i=0; i < elements.length; i++){
  elements[i].appendChild(menuInst.getElem());
}
