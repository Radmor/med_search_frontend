import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import Slider from 'material-ui/Slider';


class TermsWeightsItem extends React.Component{

    componentDidMount(){

    }

    changeTermWeight(event, value){
        this.props.changeTermWeight(this.props.term, value);
    }

    

    render(){
        this.changeTermWeight.bind(this);
        return (
            <TableRow striped={true}>
                <TableRowColumn>{ this.props.term }</TableRowColumn>
                <TableRowColumn> <Slider min={0.1} max={10} defaultValue={ this.props.termWeight } onChange={ (e, value) => this.changeTermWeight(e, value)}/></TableRowColumn>
            </TableRow>
        )
    }
}

export default TermsWeightsItem;