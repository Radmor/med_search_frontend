import api from '../api';

import * as searchConfigActions from '../actions/SearchConfigActions';

export function getSearchConfig(){
    return dispatch => {
        dispatch(searchConfigActions.getSearchConfig())
        return api.getSearchConfig()
        .then(json => dispatch(searchConfigActions.receiveSearchConfig(json)))
    }
}