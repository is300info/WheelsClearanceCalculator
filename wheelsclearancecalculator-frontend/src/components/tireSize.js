import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@material-ui/core';
import calculatedDataTable from '../utils/calculatedDataTable'

const styles = makeStyles((Theme) => createStyles({
  root: {
    width: '100%',
    marginTop: Theme.spacing(3),
    overflowX: 'auto',
    marginBottom: Theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
}));

const tableKeys = ["width", "ratio", 'diameter', 'tireHeight', 'sideWallHeight', 'diameterDifference']
const tableHeaderArr = ["Width", "Ratio", "Diameter", "Tire Height", "Sidewall Height", " Difference from stock"]
const tableHeader = tableHeaderArr.map(name => <TableCell key={name}>{name}</TableCell>)
const currentTableData = (data) => {
  return tableKeys.map(key => <TableCell key={data[key]}>{data[key]}</TableCell>)
}
const tableData = calculatedDataTable.map(data => {
  return <TableRow key={String(data["width"]) + String(data["ratio"]) + String(data["diameter"])}>
    {currentTableData(data)}
  </TableRow>
})



export default function tireSize() {
  const style = styles()
    return (
    <div className={style.root}>
      <Paper>
        <Table className={style.table}>
          <TableHead>
            <TableRow>
              {tableHeader}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData}
          </TableBody>
        </Table>
      </Paper>
      </div>
    )
  }