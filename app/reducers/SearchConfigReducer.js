import {SEARCHCONFIG_GET, SEARCHCONFIG_RECEIVE } from '../constants/SearchConfigConstants';

const initialFilteringMethods = ['metoda1', 'metoda2']
const initialComparisonMethods = ['metoda1', 'metoda2']

const initialState = {
    filteringMethods: initialFilteringMethods,
    comparisonMethods: initialComparisonMethods,
    filteringMethodsSelectValue: initialFilteringMethods[0],
    comparisonMethodsSelectValue: initialComparisonMethods[0]
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


        default:{
            return state
        }
    }
}