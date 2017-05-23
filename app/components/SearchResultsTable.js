import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class SearchResultsTable extends React.Component{
    render(){

        const tableRows = window.store.getState().search.list.map((searchResult) => {
            return (
                <TableRow striped={true}>
                    <TableRowColumn>{searchResult.id}</TableRowColumn>
                    <TableRowColumn>{ searchResult.title }</TableRowColumn>
                    <TableRowColumn>{ searchResult.content }</TableRowColumn>
                </TableRow>
            )
            });

        return (
            <Table>
                <TableHeader displaySelectAll={false}>
                    <TableHeaderColumn>id</TableHeaderColumn>
                    <TableHeaderColumn>Title</TableHeaderColumn>
                    <TableHeaderColumn>Content</TableHeaderColumn>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    { tableRows }
                </TableBody>
            </Table>
        )
    }
}

export default SearchResultsTable