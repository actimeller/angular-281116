//1) напишите простое приложение использующее Flickr api которое выдает фото по запросу
//Оно должно представлять поле ввода и кнопку по нажатию на которым происходит поиск изображения
var Search = (function () {
    function Search(searchWord) {
        this.uri = 'https://api.flickr.com/services/rest/?';
        this.queryMethod = 'flickr.photos.search';
        this.apiKey = '7fbc4d0fd04492d32fa9a2f718c6293e';
        this.text = searchWord;
    }
    Search.prototype.open = function () {
        this.query = this.uri + "method=" + this.queryMethod + "&api_key=" + this.apiKey + "&text=" + this.text + "&page=1&format=json&nojsoncallback=1";
        var that = this;
        fetch(this.query).then(function (res) {
            return res.json();
        }, function () {
            console.log('error');
        }).then(function (result) {
            that.show(result);
        });
    };
    Search.prototype.show = function (result) {
        var title;
        var inner;
        this.photos = result;
        var template;
        title = document.getElementById('title');
        inner = document.getElementById('inner');
        title.innerHTML = '';
        inner.innerHTML = '';
        if (this.photos.stat == 'ok') {
            template = "<img src=\"https://farm" + this.photos.photos.photo[0].farm + ".staticflickr.com/" + this.photos.photos.photo[0].server + "/" + this.photos.photos.photo[0].id + "_" + this.photos.photos.photo[0].secret + ".jpg\">";
            title.innerHTML = "" + this.photos.photos.photo[0].title;
            inner.innerHTML = template;
        }
        else {
            title.classList.add('error');
            title.innerHTML = "" + this.photos.photos.photo[0].title;
        }
    };
    return Search;
}());
var button;
var input;
button = document.getElementById('search');
input = document.getElementsByTagName('input')[0];
button.addEventListener('click', function () {
    var test = new Search(input.value);
    test.open();
});
