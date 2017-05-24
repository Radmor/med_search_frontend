import React from 'react'

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

import LoadingModal from './LoadingModal';
import SearchResultsTableContainer from '../containers/SearchResultsTableContainer';
import SearchInputContainer from '../containers/SearchInputContainer';

class SearchUI extends React.Component{

    render(){
        return (
            <Paper>
                <AppBar
                    title="Med search frontend"
                >
                   
                </AppBar>
                <SearchInputContainer/>
                <LoadingModal/>
                <SearchResultsTableContainer/>
                
            </Paper>
        )
    }

}

export default SearchUI;