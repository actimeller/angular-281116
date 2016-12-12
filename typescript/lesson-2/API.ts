import 'whatwg-fetch';

export default class API {
    protected requestUrl: string;

    constructor() {
        let credentials = {
            uri: 'https://api.flickr.com/services/rest/?',
            queryMethod: 'flickr.photos.search',
            apiKey: '7fbc4d0fd04492d32fa9a2f718c6293e'
        };

        this.requestUrl = `${credentials.uri}method=${credentials.queryMethod}&api_key=${credentials.apiKey}&page=1&format=json&nojsoncallback=1`;
    }

    public search(text: string) {
        let uri = this.requestUrl;
        uri += `&text=${text}`;

        return fetch(uri)
            .then(this.checkStatus)
            .then(this.parseJSON)
    }

    private checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }

    private parseJSON(response) {
        return response.json()
    }
}