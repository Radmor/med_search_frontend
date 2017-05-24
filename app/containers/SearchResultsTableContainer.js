import { connect } from 'react-redux';

import SearchResultsTable from '../components/SearchResultsTable';


const mapStateToProps = (state) => {
    return {
        searchResults: state.search.list
    }
}

const SearchResultsTableContainer = connect(
    mapStateToProps
)(SearchResultsTable);

export default SearchResultsTableContainer;