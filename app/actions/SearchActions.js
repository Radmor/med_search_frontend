import {SEARCH_GET, SEARCH_RECEIVE} from '../constants/SearchConstants';

export function getSearchResults(){
    return {
        type: SEARCH_GET
    }
}

export function receiveSearchResults(searchResults){
    return {
        type: SEARCH_RECEIVE,
        searchResults: searchResults
    }
}