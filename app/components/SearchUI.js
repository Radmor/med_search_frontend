import React from 'react'

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

import LoadingModal from './LoadingModal';
import SearchResultsTable from './SearchResultsTable';
import SearchInput from './SearchInput';

class SearchUI extends React.Component{

    render(){
        return (
            <Paper>
                <AppBar
                    title="Med search frontend"
                >
                   
                </AppBar>
                <SearchInput/>
                <LoadingModal/>
                <SearchResultsTable/>
                
            </Paper>
        )
    }

}

export default SearchUI;