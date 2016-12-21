"use strict";
var $ = require("jquery");
var lodash_1 = require("lodash");
var App = (function () {
    function App($el) {
        this.$el = $el;
        this.$form = $('form', $el);
        this.$imageContainer = $('.imagelist', $el).first();
        this.$button = $('button', this.$el).first();
        this.uri = 'https://api.flickr.com/services/rest/?';
        this.queryMethod = 'flickr.photos.search';
        this.apiKey = '7fbc4d0fd04492d32fa9a2f718c6293e';
    }
    App.prototype.init = function () {
        var _this = this;
        this.buttonDisable(false);
        this.$form.on('submit', function (event) {
            event.preventDefault();
            _this.$imageContainer.empty();
            var query = _this.$form.serialize();
            _this.getPhotos(query);
            _this.buttonDisable(true, lodash_1.debounce(function () {
                _this.buttonDisable(false);
            }, 1000));
        });
    };
    App.prototype.buttonDisable = function (status, callback) {
        this.$button.prop('disabled', status);
        if (callback) {
            callback();
        }
    };
    App.prototype.getPhotos = function (text) {
        var _this = this;
        var request = this.uri + "method=" + this.queryMethod + "&api_key=" + this.apiKey + "&text=" + text + "&page=1&format=json&nojsoncallback=1";
        var res = fetch(request, {
            method: 'GET'
        });
        res.then(function (response) {
            return response.json().then(function (json) {
                var photos = json.photos;
                _this.insertImages(photos.photo);
            });
        });
        res.catch(function (err) {
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
    };
    App.prototype.insertImages = function (photos) {
        if (photos.length === 0) {
            this.$imageContainer.html("<h3>\u0421\u043E\u0432\u0441\u0435\u043C \u043D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E</h3>\n             <p>\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u044F\u0441\u043D\u0435\u0435 \u0444\u043E\u0440\u043C\u0443\u043B\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043C\u044B\u0441\u043B\u044C</p>\n            ");
            return;
        }
        var $list = $('<ul />');
        $list.addClass('photo-list');
        photos.forEach(function (photo) {
            var $listElement = $("<li>\n                <img src=\"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg\">\n            </li>");
            $listElement.appendTo($list);
        });
        $list.appendTo(this.$imageContainer);
    };
    return App;
}());
var app = new App($('#Flickr')).init();
