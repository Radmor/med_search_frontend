import {SEARCHCONFIG_QUERY_UPDATE,SEARCHCONFIG_GET, SEARCHCONFIG_RECEIVE, SEARCHCONFIG_COMPARISON_METHOD_SELECT_VALUE, SEARCHCONFIG_FILTERING_METHOD_SELECT_VALUE } from '../constants/SearchConfigConstants';

const initialFilteringMethods = ['metoda1', 'metoda2']
const initialComparisonMethods = ['metoda1', 'metoda2']

const initialState = {
    filteringMethods: initialFilteringMethods,
    comparisonMethods: initialComparisonMethods,
    filteringMethodsSelectValue: initialFilteringMethods[0],
    comparisonMethodsSelectValue: initialComparisonMethods[0],
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
                filteringMethods:action.filteringMethods,
                comparisonMethods: action.comparisonMethods
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