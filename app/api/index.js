class api{
    constructor(){
        this.searchURL = 'http://0.0.0.0:8000/search/'
        this.searchConfigURL = 'http://0.0.0.0:8000/search/config/'
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

    getSearchResults(queryOptions){
        return this.fetch('POST', this.searchURL, queryOptions);
    }

    getSearchConfig(){
        return this.fetch('GET', this.searchConfigURL);
    }
}

export default new api();