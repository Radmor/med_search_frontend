import { connect } from 'react-redux';

import SearchInput from '../components/SearchInput';
import * as searchConfigActions from '../actions/SearchConfigActions';
import * as searchEffects from '../effects/SearchEffects';
import * as searchConfigEffects from '../effects/SearchConfigEffects';

import * as searchActions from '../actions/SearchActions';

const mapDispatchToProps = (dispatch) => {
    return {
        
        changeFilteringMethodSelectValue: (event, index, value) => {
            dispatch(searchConfigActions.changeFilteringMethodSelectValue(value))
        },
        changeComparisonMethodSelectValue:(event, index, value) => {
            dispatch(searchConfigActions.changeComparisonMethodSelectValue(value))
        },
        changeQuery: (value) => {
            dispatch(searchConfigActions.changeQuery(value))
        },

        changeTermWeight: (term, weight) => {
            dispatch(searchActions.changeTermWeight(term, weight))
        },

        getSearchResults: () => {
            var queryOptions = {
                query: window.store.getState().searchConfig.query,
                filtering_method: window.store.getState().searchConfig.filteringMethodsSelectValue,
                comparison_method: window.store.getState().searchConfig.comparisonMethodsSelectValue,
                terms_weights: window.store.getState().search.termsWeights
            }
            dispatch(searchEffects.getSearchResults(queryOptions))
        },

        getSearchConfig: () => {
            dispatch(searchConfigEffects.getSearchConfig())
        }

    }
}

const mapStateToProps = (state) => {
    return {
        filteringMethods: state.searchConfig.filteringMethods,
        comparisonMethods: state.searchConfig.comparisonMethods,
        filteringMethodsSelectValue: state.searchConfig.filteringMethodsSelectValue,
        comparisonMethodsSelectValue: state.searchConfig.comparisonMethodsSelectValue,
        query: state.searchConfig.query,
        termsWeights: state.search.termsWeights
    }
}

const SearchInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);


export default SearchInputContainer;