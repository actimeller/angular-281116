"use strict";
const lodash_1 = require("lodash");
const Base_1 = require("./Base");
const API_1 = require("./API");
class App extends Base_1.default {
    constructor($root, templateClass, resultClass) {
        super($root, templateClass, resultClass);
        this.addEvents({
            'click .js-action-btn': 'onSearch'
        });
        this.API = new API_1.default;
    }
    onSearch(e) {
        let handle = lodash_1.debounce((e) => {
            let text = this.$el.querySelector('.js-search-input');
            this.API.search(text.value).then(this.appendResponseImage.bind(this));
        }, 300);
        handle(e);
    }
}
exports.App = App;
