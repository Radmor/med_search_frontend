import React from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';

import TermsWeightsContainer from '../containers/TermsWeightsContainer';


import Popover from 'material-ui/Popover';
import Slider from 'material-ui/Slider';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


import TermsWeightsItem from './TermsWeightsItem';

class SearchInput extends React.Component{

    state = {
        queryValue: ''
    };

    componentDidMount(){
        this.props.getSearchConfig();
    }

    updateInputValue(e){
        this.setState({queryValue:e.target.value})
    }

    render(){
        const filteringMethodsSelectItems = this.props.filteringMethods.map(
            (filteringMethod) => {
                return (
                    <MenuItem value={filteringMethod} primaryText={filteringMethod} />
                )
            }
        )

        const comparisonMethodsSelectItems = this.props.comparisonMethods.map(
            (comparisonMethod) => {
                return (
                    <MenuItem value={comparisonMethod} primaryText={comparisonMethod} />
                )
            }
        )

        var termsWeightsItems = [];

        for (var term in this.props.termsWeights) {
            termsWeightsItems.push(
                    <TermsWeightsItem term={ term } termWeight={ this.props.termsWeights[term] } changeTermWeight={ this.props.changeTermWeight }/>
            )
        }
        
        
        return (
            <form>
                <Toolbar ref={(toolbar) => this.toolbar = toolbar }>
                    <ToolbarGroup firstChild={true}>
                        <TextField
                            value={ this.props.query}
                            onChange={ (e) => this.props.changeQuery(e.target.value) }
                        />
                    </ToolbarGroup>
                    <ToolbarGroup>
                        <ToolbarTitle text="Options" />
                        <SelectField
                            value = { this.props.filteringMethodsSelectValue }
                            onChange = { this.props.changeFilteringMethodSelectValue }
                        >
                            {filteringMethodsSelectItems}
                        </SelectField>
                        <SelectField
                            value = { this.props.comparisonMethodsSelectValue }
                            onChange = { this.props.changeComparisonMethodSelectValue }
                        >
                            {comparisonMethodsSelectItems}
                        </SelectField>
                        <ToolbarSeparator />
                        <RaisedButton label="Search" primary={true} onTouchTap={ this.props.getSearchResults }/>
                    </ToolbarGroup>

                    
                </Toolbar>
                    <Table>
                        <TableHeader displaySelectAll={false}>
                            <TableHeaderColumn>Term</TableHeaderColumn>
                            <TableHeaderColumn>Weight</TableHeaderColumn>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            { termsWeightsItems }
                        </TableBody>
                    </Table>
            </form>
        )
    }
}

export default SearchInput;
