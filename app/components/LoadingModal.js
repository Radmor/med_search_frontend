import React from 'react';

import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';

const circularProgressStyles = {
    left: '35%'
    
}

const modalStyle = {
    display: 'inline'
}

class LoadingModal extends React.Component{
    render(){
        return(
            <Dialog
                open={ false }
            >
                <CircularProgress size={200} thickness={15} style={circularProgressStyles}/>
            </Dialog>
        );
    }
}

export default LoadingModal;