class api{
    constructor(){
        this.searchURL = 'http://0.0.0.0:8000/api/search'
    }

    addQueryString(searchURL, queryString){
        var urlParser = require('url');

        var urlObject = urlParser.parse(searchURL);
        urlObject.search = queryString;
        console.log(urlObject);
    }

    fetch(method, url, options={}){
        const requestOptions = {
            ...options,
            method: method,
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            }
        };
        return fetch(url, requestOptions)
        .then(res => res.json())
    }

    fetchSearchData(queryString){
        return this.fetch('GET', this.addQueryString(this.searchURL, queryString));
    }
}

export default new api();