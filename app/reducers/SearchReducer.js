import { SEARCH_GET, SEARCH_RECEIVE, TERM_WEIGHT_UPDATE } from '../constants/SearchConstants';

const initialState = {
    list: [],
    isFetching: false,
    termsWeights: {},
    measures: {}
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
                list: action.searchResults,
                termsWeights: action.termsWeights,
                measures: action.measures
            };
        }
        
        case TERM_WEIGHT_UPDATE: {
            state.termsWeights[action.term] = action.weight;
            return {
                ...state
            }
        }

        default:
            return state;
    }
}