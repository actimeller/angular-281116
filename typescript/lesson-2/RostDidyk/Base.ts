export default class Base {
    protected $el: HTMLElement;
    private resultClass: string;

    constructor($root, templateClass, resultClass) {
        let html = document.querySelector(templateClass).innerHTML;
        $root.innerHTML = html;
        this.$el = $root;
        this.resultClass = resultClass;
    }

    addEvents(events) {
        Object.keys(events).forEach(event => {
            let [action, selector] = event.split(' ');
            let callback = events[event];
            this.$el.querySelector(selector).addEventListener(action, this[callback].bind(this));
        });
    }

    appendResponseImage(response) {
        let { photos } = response;
        let htmlList = (photos.photo.slice(0,5)).map(photo=>{
            let imgSrc = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
            return `<img src="${imgSrc}" />`
        });
        this.$el.querySelector(this.resultClass).innerHTML = htmlList.join('');
    }
}