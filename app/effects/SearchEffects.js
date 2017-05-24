import api from '../api';

import * as searchActions from '../actions/SearchActions';

export function getSearchResults(queryOptions){
    return dispatch => {
        dispatch(searchActions.getSearchResults())
        return api.getSearchResults(queryOptions)
            .then(json => dispatch(searchActions.receiveSearchResults(json)))
    }
}