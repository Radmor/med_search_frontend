import { SEARCH_GET, SEARCH_RECEIVE } from '../constants/SearchConstants';

const initialState = {
    list: [],
    isFetching: false
};

export function search(state = initialState, action){
    switch (action.type){
        case SEARCH_GET: {
            return {
                ...state,
                isFetching: true
            };
        }

        case SEARCH_RECEIVE: {
            return {
                ...state,
                isFetching: false,
                list: action.searchResults
            };
        }

        default:
            return state;
    }
}