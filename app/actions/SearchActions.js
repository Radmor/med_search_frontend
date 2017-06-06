import { SEARCH_GET, SEARCH_RECEIVE, TERM_WEIGHT_UPDATE } from '../constants/SearchConstants';

export function getSearchResults(){
    return {
        type: SEARCH_GET
    }
}

export function receiveSearchResults(searchResults){
    return {
        type: SEARCH_RECEIVE,
        searchResults: searchResults.results,
        termsWeights: searchResults.terms_weights,
        measures: searchResults.measures
    }
}

export function changeTermWeight(term, weight){
    return {
        type:TERM_WEIGHT_UPDATE,
        term: term,
        weight: weight
    }
}