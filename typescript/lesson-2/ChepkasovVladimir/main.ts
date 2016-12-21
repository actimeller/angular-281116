import { debounce } from 'lodash'
// npm install --save @types/lodash

class Photo {
  farm:number;
  id:string;
  isfamily:number;
  isfriend:number;
  ispublic:number;
  owner:string;
  secret:string;
  server:string;
  title:string;
}

class Photos {
  page:number;
  pages:number;
  perpage:number;
  photo:Photo[];
  total:string;
}

class FlickrResult {
  stat:string;
  photos:Photos;
}

function isHTMLElement(item:any): item is HTMLElement{
  if (typeof item === 'object' && item instanceof HTMLElement) {
     return true;
  }
  return false;
}

type callback = (url:string) => void;
function isCallback(item:any): item is callback{
  if (typeof item === 'function') {
     return true;
  }
  return false;
}

interface  API {
  find(text:string, callback:callback):void;
  //previous(callback:callback):void;
  //next(callback:callback):void;
}

class FlickrAPI implements API {
  private apiKey:string = '7fbc4d0fd04492d32fa9a2f718c6293e';
  private queryMethod:string = 'flickr.photos.search';
  private uri:string = 'https://api.flickr.com/services/rest/?';
  private findResult:FlickrResult;
  private findText:string;

  private execute(url:string):Promise<Response> {
    //TODO: debounce method
    return fetch(url).then((res:Response)=>res.json());
  }

  private renderSrc(photo:Photo):string{
    return `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
  }
  private renderRequest(text:string):string{
    return `${this.uri}method=${this.queryMethod}&api_key=${this.apiKey}&text=${text}&page=1&format=json&nojsoncallback=1`;
  }

  private render(result:FlickrResult, idx:number, callback?: callback):void{
    if(isCallback(callback)){
      let url:string = this.renderSrc(result.photos.photo[idx]);
      callback(url);
    }
  }

  public find(text:string, callback?: callback):void{
    let request:string = this.renderRequest(text);
    let response:Promise<Response> = this.execute(request);
    response.then((res:any)=>{this.render(<FlickrResult> res, 0, callback)});
  }
}

class FlickrInterface {
  private api:FlickrAPI;
  private findText:string = '';
  private wait:number = 500;

  private mainHTMLElement:HTMLElement;
  private inputField:HTMLInputElement;
  private imageField:HTMLImageElement;
  private buttonFind:HTMLButtonElement;

  constructor(element:HTMLElement){
    this.api = new FlickrAPI();
    this.mainHTMLElement = element;

    this.inputField = <HTMLInputElement> document.createElement('input');
    this.imageField = <HTMLImageElement> document.createElement('img');
    this.buttonFind = <HTMLButtonElement> document.createElement('button');

    this.buttonFind.textContent = 'Find';
    //this.buttonFind.onclick = this.onClick;
    this.buttonFind.onclick = debounce(this.onClick, this.wait);


    this.inputField.onchange = this.onChange;
    this.inputField.value = '';

    let findContent:HTMLElement = document.createElement('div');
    let imageContent:HTMLElement = document.createElement('div');
    findContent.appendChild(this.buttonFind);
    findContent.appendChild(this.inputField);
    imageContent.appendChild(this.imageField);

    this.mainHTMLElement.appendChild(findContent);
    this.mainHTMLElement.appendChild(imageContent);
  }

  public findResult = (url:string) => {
    this.imageField.src = url;
  }

  private onClick = (event:Event) => {
    if(this.findText !== this.inputField.value){
      this.findText = this.inputField.value;
    }

    if(this.findText.length > 0){
      this.api.find(this.findText, this.findResult);
    }
  }

  private onChange = (event:Event) => {
    this.findText = (event.target as HTMLInputElement).value;
  }

}

// Run flickrInterface
let elements:(HTMLElement|null) = document.getElementById('flickr');
let flickrInterface:FlickrInterface;
if(isHTMLElement(elements)){
  flickrInterface = new FlickrInterface(elements);
}
