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

        const tableRows = this.props.searchResults.map((searchResult) => {
            return (
                <TableRow striped={true}>
                    <TableRowColumn>{ searchResult.title }</TableRowColumn>
                    <TableRowColumn>{ searchResult.content }</TableRowColumn>
                </TableRow>
            )
            });

        return (
            <Table>
                <TableHeader displaySelectAll={false}>
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
