"use strict";
var lodash_1 = require("lodash");
// npm install --save @types/lodash
var Photo = (function () {
    function Photo() {
    }
    return Photo;
}());
var Photos = (function () {
    function Photos() {
    }
    return Photos;
}());
var FlickrResult = (function () {
    function FlickrResult() {
    }
    return FlickrResult;
}());
function isHTMLElement(item) {
    if (typeof item === 'object' && item instanceof HTMLElement) {
        return true;
    }
    return false;
}
function isCallback(item) {
    if (typeof item === 'function') {
        return true;
    }
    return false;
}
var FlickrAPI = (function () {
    function FlickrAPI() {
        this.apiKey = '7fbc4d0fd04492d32fa9a2f718c6293e';
        this.queryMethod = 'flickr.photos.search';
        this.uri = 'https://api.flickr.com/services/rest/?';
    }
    FlickrAPI.prototype.execute = function (url) {
        //TODO: debounce method
        return fetch(url).then(function (res) { return res.json(); });
    };
    FlickrAPI.prototype.renderSrc = function (photo) {
        return "https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg";
    };
    FlickrAPI.prototype.renderRequest = function (text) {
        return this.uri + "method=" + this.queryMethod + "&api_key=" + this.apiKey + "&text=" + text + "&page=1&format=json&nojsoncallback=1";
    };
    FlickrAPI.prototype.render = function (result, idx, callback) {
        if (isCallback(callback)) {
            var url = this.renderSrc(result.photos.photo[idx]);
            callback(url);
        }
    };
    FlickrAPI.prototype.find = function (text, callback) {
        var _this = this;
        var request = this.renderRequest(text);
        var response = this.execute(request);
        response.then(function (res) { _this.render(res, 0, callback); });
    };
    return FlickrAPI;
}());
var FlickrInterface = (function () {
    function FlickrInterface(element) {
        var _this = this;
        this.findText = '';
        this.wait = 500;
        this.findResult = function (url) {
            _this.imageField.src = url;
        };
        this.onClick = function (event) {
            if (_this.findText !== _this.inputField.value) {
                _this.findText = _this.inputField.value;
            }
            if (_this.findText.length > 0) {
                _this.api.find(_this.findText, _this.findResult);
            }
        };
        this.onChange = function (event) {
            _this.findText = event.target.value;
        };
        this.api = new FlickrAPI();
        this.mainHTMLElement = element;
        this.inputField = document.createElement('input');
        this.imageField = document.createElement('img');
        this.buttonFind = document.createElement('button');
        this.buttonFind.textContent = 'Find';
        //this.buttonFind.onclick = this.onClick;
        this.buttonFind.onclick = lodash_1.debounce(this.onClick, this.wait);
        this.inputField.onchange = this.onChange;
        this.inputField.value = '';
        var findContent = document.createElement('div');
        var imageContent = document.createElement('div');
        findContent.appendChild(this.buttonFind);
        findContent.appendChild(this.inputField);
        imageContent.appendChild(this.imageField);
        this.mainHTMLElement.appendChild(findContent);
        this.mainHTMLElement.appendChild(imageContent);
    }
    return FlickrInterface;
}());
// Run flickrInterface
var elements = document.getElementById('flickr');
var flickrInterface;
if (isHTMLElement(elements)) {
    flickrInterface = new FlickrInterface(elements);
}
