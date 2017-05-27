import { SEARCHCONFIG_COMPARISON_METHOD_SELECT_VALUE,
         SEARCHCONFIG_FILTERING_METHOD_SELECT_VALUE,
         SEARCHCONFIG_RECEIVE,
         SEARCHCONFIG_GET,
         SEARCHCONFIG_QUERY_UPDATE
       } from '../constants/SearchConfigConstants';


export function changeComparisonMethodSelectValue(value){
    return{
        type: SEARCHCONFIG_COMPARISON_METHOD_SELECT_VALUE,
        comparisonMethodsSelectValue: value
    }
}


export function changeFilteringMethodSelectValue(value){
    return {
        type: SEARCHCONFIG_FILTERING_METHOD_SELECT_VALUE,
        filteringMethodsSelectValue: value
    }
}


export function changeQuery(value){
    return {
        type: SEARCHCONFIG_QUERY_UPDATE,
        query: value
    }
}

export function getSearchConfig(){
    return {
        type: SEARCHCONFIG_GET
    }
}

export function receiveSearchConfig(searchConfig){
    return {
        type: SEARCHCONFIG_RECEIVE,
        searchConfig: searchConfig
    }
}