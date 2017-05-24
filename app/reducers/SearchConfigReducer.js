import {SEARCHCONFIG_GET, SEARCHCONFIG_RECEIVE } from '../constants/SearchConfigConstants';

const initialState = {
    filteringMethods: ['metoda1', 'metoda2'],
    comparisonMethods: ['metoda1', 'metoda2']
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