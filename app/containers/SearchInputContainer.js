import { connect } from 'react-redux';

import SearchInput from '../components/SearchInput';
import * as searchConfigActions from '../actions/SearchConfigActions';
import * as searchEffects from '../effects/SearchEffects';

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

        getSearchResults: () => {
            var queryOptions = {
                query: window.store.getState().searchConfig.query,
                filtering_method: window.store.getState().searchConfig.filteringMethodsSelectValue,
                comparison_method: window.store.getState().searchConfig.comparisonMethodsSelectValue
            }
            dispatch(searchEffects.getSearchResults(queryOptions))
        }

    }
}

const mapStateToProps = (state) => {
    return {
        filteringMethods: state.searchConfig.filteringMethods,
        comparisonMethods: state.searchConfig.comparisonMethods,
        filteringMethodsSelectValue: state.searchConfig.filteringMethodsSelectValue,
        comparisonMethodsSelectValue: state.searchConfig.comparisonMethodsSelectValue,
        query: state.searchConfig.query
    }
}

const SearchInputContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchInput);


export default SearchInputContainer;