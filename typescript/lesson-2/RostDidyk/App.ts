import { debounce } from 'lodash';
import Base from './Base';
import API from './API';

export class App extends Base {
    private API;
    constructor($root: HTMLElement, templateClass: string, resultClass: string) {
        super($root, templateClass, resultClass);

        this.addEvents({
            'click .js-action-btn': 'onSearch'
        });

        this.API = new API;
    }

    onSearch(e) {
       let handle =  debounce((e)=>{
            let text = <HTMLInputElement>this.$el.querySelector('.js-search-input');
            this.API.search(text.value).then(this.appendResponseImage.bind(this));
       }, 300);

       handle(e);
    }
}