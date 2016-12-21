//1) напишите простое приложение использующее Flickr api которое выдает фото по запросу
//Оно должно представлять поле ввода и кнопку по нажатию на которым происходит поиск изображения

// строка запороса => `${this.uri}method=${this.qyeryMethod}&api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`
// строка для атрибута src у img => https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg
// uri: 'https://api.flickr.com/services/rest/?',
// queryMethod: 'flickr.photos.search',
// apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'

type photos =  {
    page:number,
    pages:number,
    perpage:number,
    photo:{
        farm:number,
        id:string,
        isfamily:number,
        isfriend:number,
        ispublic:number,
        owner:string,
        secret:string,
        server:string,
        title:string,
    }[]
};

class Search {

    private uri:string = 'https://api.flickr.com/services/rest/?';
    private queryMethod:string = 'flickr.photos.search';
    private apiKey:string =  '7fbc4d0fd04492d32fa9a2f718c6293e';
    private text:string;
    private query:string;
    private photos:any;

    public constructor(searchWord:string) {
        this.text = searchWord;
    }

    public open():void {
        this.query = `${this.uri}method=${this.queryMethod}&api_key=${this.apiKey}&text=${this.text}&page=1&format=json&nojsoncallback=1`;
        let that = this;
        fetch(this.query).then((res:Response)=>{
            return res.json();
        },()=>{
            console.log('error')
        }).then((result) => {
            that.show(result);
        })
    }

    private show(result:any):void { //выводиться только первая картинка в наборе
        let title:HTMLElement;
        let inner:HTMLElement;
        this.photos = result as {photos?:photos, stat:string};
        let template:string;
        title = document.getElementById('title');
        inner = document.getElementById('inner');
        title.innerHTML = ''; inner.innerHTML = '';

        if(this.photos.stat == 'ok') {
            template = `<img src="https://farm${this.photos.photos.photo[0].farm}.staticflickr.com/${this.photos.photos.photo[0].server}/${this.photos.photos.photo[0].id}_${this.photos.photos.photo[0].secret}.jpg">`;
            title.innerHTML = `${this.photos.photos.photo[0].title}`;
            inner.innerHTML = template;
        } else {
            title.classList.add('error');
            title.innerHTML = `${this.photos.photos.photo[0].title}`;
        }
    }
}


let button:HTMLElement;
let input:HTMLInputElement;

button = document.getElementById('search');
input = document.getElementsByTagName('input')[0];
button.addEventListener('click',()=>{
    let test = new Search(input.value);
    test.open();
});

