import React from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const textFieldStyles = {
    color:'white'
}


class SearchInput extends React.Component{
    render(){
        return (
            <div>
                <TextField inputStyle={ textFieldStyles }/>
            </div>
        )
    }
}

export default SearchInput;