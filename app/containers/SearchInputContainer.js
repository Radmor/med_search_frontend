import { connect } from 'react-redux';

import SearchInput from '../components/SearchInput';
import * as searchConfigActions from '../actions/SearchConfigActions';


const mapDispatchToProps = (dispatch) => {
    return {
        
        changeFilteringMethodSelectValue: (event, index, value) => {
            dispatch(searchConfigActions.changeFilteringMethodSelectValue(value))
        },
        changeComparisonMethodSelectValue:(event, index, value) => {
            dispatch(searchConfigActions.changeComparisonMethodSelectValue(value))
        },
        changeQuery: (value) => {
            console.log(value)
            dispatch(searchConfigActions.changeQuery(value))
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