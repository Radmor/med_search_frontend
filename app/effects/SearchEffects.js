import api from '../api';

import * as searchActions from '../actions/SearchActions';

export function getSearchResults(queryOptions){
    return dispatch => {
        dispatch(searchActions.getSearchResults())
        return api.getSearchResults({
            body: JSON.stringify({
                query: queryOptions.query,
                filtering_method: queryOptions.filtering_method,
                comparison_method: queryOptions.comparison_method
            })
        })
            .then(json => dispatch(searchActions.receiveSearchResults(json)))
    }
} 