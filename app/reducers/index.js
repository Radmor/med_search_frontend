import { combineReducers } from 'redux';
import { search } from './SearchReducer';
import { searchConfig } from './SearchConfigReducer';

const rootReducer = combineReducers({
    search: search,
    searchConfig: searchConfig
})

export default rootReducer;