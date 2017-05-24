import { connect } from 'react-redux';

import SearchInput from '../components/SearchInput';

const mapStateToProps = (state) => {
    return {
        filteringMethods: state.searchConfig.filteringMethods,
        comparisonMethods: state.searchConfig.comparisonMethods,
        filteringMethodsSelectValue: state.searchConfig.filteringMethodsSelectValue,
        comparisonMethodsSelectValue: state.searchConfig.comparisonMethodsSelectValue
    }
}

const SearchInputContainer = connect(
    mapStateToProps
)(SearchInput);


export default SearchInputContainer;