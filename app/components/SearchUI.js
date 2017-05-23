import React from 'react'

import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';


import LoadingModal from './LoadingModal';


class SearchUI extends React.Component{

    render(){
        return (
            <Paper>
                <AppBar
                    title="Med search frontend"
                />
                <LoadingModal/>
                
            </Paper>
        )
    }

}

export default SearchUI;