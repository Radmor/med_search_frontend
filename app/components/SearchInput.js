import React from 'react';

import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';

class SearchInput extends React.Component{
    render(){
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <TextField/>
                </ToolbarGroup>
                <ToolbarGroup>
                    <ToolbarTitle text="Options" />
                    <IconMenu
                        iconButtonElement={
                        <IconButton touch={true}>
                            <NavigationExpandMoreIcon />
                        </IconButton>
                        }
                    >
                        <MenuItem primaryText="first method" />
                        <MenuItem primaryText="second method" />
                    </IconMenu>
                    <ToolbarSeparator />
                    <RaisedButton label="Search" primary={true} />
                </ToolbarGroup>
            </Toolbar>
        )
    }
}

export default SearchInput;