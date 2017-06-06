import { connect } from 'react-redux';

import SearchResultsTable from '../components/SearchResultsTable';


const mapStateToProps = (state) => {
    return {
        searchResults: state.search.list,
        measures: state.search.measures
    }
}

const SearchResultsTableContainer = connect(
    mapStateToProps
)(SearchResultsTable);

export default SearchResultsTableContainer;
