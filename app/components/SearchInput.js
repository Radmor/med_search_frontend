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

class SearchInput extends React.Component{
    render(){
        console.log(this.props)
        const filteringMethodsSelectItems = this.props.filteringMethods.map(
            (filteringMethod) => {
                return (
                        <MenuItem primaryText={filteringMethod} />
                )
            }
        )

        const comparisonMethodsSelectItems = this.props.comparisonMethods.map(
            (comparisonMethod) => {
                return (
                    <MenuItem primaryText={comparisonMethod} />
                )
            }
        )


        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <TextField/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <SelectField
                        floatingLabelText="Filtering Method"
                    >
                        {filteringMethodsSelectItems}
                    </SelectField>
                    <SelectField
                        floatingLabelText="Comparison Method"
                    >
                        {comparisonMethodsSelectItems}
                    </SelectField>
                    <ToolbarSeparator />
                    <RaisedButton label="Search" primary={true}/>
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

export default SearchInput;
