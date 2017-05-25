class api{
    constructor(){
        this.searchURL = 'http://0.0.0.0:8000/search/'
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
}

export default new api();