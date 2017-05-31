import React from 'react';

import {
    Popover
} from 'material-ui/Popover';

class TermsWeights extends React.Component{
    render(){
        return (
            <Popover>
                open={ this.props.open }
            </Popover>
        )
    }
}

export default TermsWeights;