import {SEARCHCONFIG_QUERY_UPDATE,SEARCHCONFIG_GET, SEARCHCONFIG_RECEIVE, SEARCHCONFIG_COMPARISON_METHOD_SELECT_VALUE, SEARCHCONFIG_FILTERING_METHOD_SELECT_VALUE } from '../constants/SearchConfigConstants';




const initialFilteringMethods = []
const initialComparisonMethods = []

const initialState = {
    filteringMethods: initialFilteringMethods,
    comparisonMethods: initialComparisonMethods,
    filteringMethodsSelectValue: '',
    comparisonMethodsSelectValue: '',
    query: ''
}

export function searchConfig(state = initialState, action){
    switch(action.type){
        case SEARCHCONFIG_GET:{
            return {
                ...state
            };
        }

        case SEARCHCONFIG_RECEIVE:{
            return {
                ...state,
                filteringMethods:action.searchConfig.filtering_methods,
                comparisonMethods: action.searchConfig.comparison_methods
            };
            
        }

        case SEARCHCONFIG_FILTERING_METHOD_SELECT_VALUE:{
            return {
                ...state,
                filteringMethodsSelectValue: action.filteringMethodsSelectValue
            }
        }

        case SEARCHCONFIG_COMPARISON_METHOD_SELECT_VALUE:{
            return {
                ...state,
                comparisonMethodsSelectValue: action.comparisonMethodsSelectValue
            }
        }

        case SEARCHCONFIG_QUERY_UPDATE:{
            return {
                ...state,
                query: action.query
            }
        }


        default:{
            return state
        }
    }
}