import * as $ from 'jquery';
import { debounce } from 'lodash';

interface IResponse {
    photos: IPhotos
}

interface IPhotos {
    photo: IPhoto[]
}

interface IPhoto {
    farm:number,
    server:string,
    id:string,
    secret:string
}

class App {
    private $form: JQuery;
    private $imageContainer: JQuery;
    private $button: JQuery;
    private uri: string;
    private queryMethod: string;
    private apiKey: string;


    constructor(private $el: JQuery) {
        this.$form = $('form', $el);
        this.$imageContainer = $('.imagelist', $el).first();
        this.$button = $('button', this.$el).first();
        this.uri = 'https://api.flickr.com/services/rest/?';
        this.queryMethod = 'flickr.photos.search';
        this.apiKey = '7fbc4d0fd04492d32fa9a2f718c6293e';
    }

    init() {
        this.buttonDisable(false);

        this.$form.on('submit', (event: JQueryEventObject) => {
            event.preventDefault();
            this.$imageContainer.empty();
            let query: string = this.$form.serialize();
            this.getPhotos(query);
            this.buttonDisable(true, debounce(()=>{
                    this.buttonDisable(false);
                }, 1000)
            );
        })
    }

    buttonDisable(status:boolean, callback?:()=>void) {
        this.$button.prop('disabled', status);
        if(callback) {
            callback();
        }
    }

    getPhotos(text: string) {
        let request: string = `${this.uri}method=${this.queryMethod}&api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`;

        let res = fetch(request, {
            method: 'GET'
        });
        res.then((response:Body) => {
            return response.json().then((json:IResponse) => {
                let photos: IPhotos = json.photos;
                this.insertImages(photos.photo);
            })
        });

        res.catch((err:any)=>{
            console.error('Все пропало, шеф! У нас тут ошибка!!!', err);
        });

        // let res = $.ajax({
        //     type: 'GET',
        //     url: request
        // });
        //
        // res.done((resp: IResponse) => {
        //     let photos: IPhotos = resp.photos;
        //
        //     this.insertImages(photos.photo);
        // });
        //
        // res.fail((err:any) => {
        //     console.error('Все пропало, шеф! У нас тут ошибка!!!', err);
        // });
    }

    insertImages(photos:IPhoto[]) {
        if (photos.length === 0) {
            this.$imageContainer.html(`<h3>Совсем ничего не найдено</h3>
             <p>Попробуйте яснее формулировать мысль</p>
            `);
            return;
        }

        let $list = $('<ul />');
        $list.addClass('photo-list');

        photos.forEach((photo:IPhoto) => {
            let $listElement = $(`<li>
                <img src="https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg">
            </li>`);

            $listElement.appendTo($list);
        });

        $list.appendTo(this.$imageContainer);
    }
}

let app = new App($('#Flickr')).init();

