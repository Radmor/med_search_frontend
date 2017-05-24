import { connect } from 'react-redux';

import SearchInput from '../components/SearchInput';

const mapStateToProps = (state) => {
    return {
        filteringMethods: state.searchConfig.filteringMethods,
        comparisonMethods: state.searchConfig.comparisonMethods
    }
}

const SearchInputContainer = connect(
    mapStateToProps
)(SearchInput);


export default SearchInputContainer;