import React from 'react';
import './selectedOptionsTable.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Tower } from '../models/data';

import Icon from '@mdi/react';
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js';



interface SelectedOptionsTableProps {
  selectedOptions: Tower[];
  correctOption: Tower;
}

const SelectedOptionsTable = ({selectedOptions, correctOption}: SelectedOptionsTableProps) => (
  <TableContainer>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="center">Image</TableCell>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Class</TableCell>
        <TableCell align="center">Cost</TableCell>
        <TableCell align="center">Is upgrade</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {selectedOptions.map((tower) => (
        <TableRow
          key={tower.label}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell align="center">
          <img src={tower.imageSrc} alt={tower.label} 
            style={{
                marginRight: 10,
                width: 40,
                height: 40,
              }} 
            />
          </TableCell>
          <TableCell align="center">
            {tower.label}
          </TableCell>
          <TableCell 
            className={correctOption.class === tower.class? 'right' : 'wrong'} 
            align="center"
          >
            <label>
              {tower.class}
            </label>
          </TableCell>
          <TableCell 
            className={correctOption.cost === tower.cost? 'right' : 'partiallyRight'} 
            align="center"
          >
            <label>
              {tower.cost}
            </label>
            { correctOption.cost != tower.cost &&
              <Icon path={correctOption.cost < tower.cost? mdiArrowDownBold : mdiArrowUpBold} size={1} />
            }
          </TableCell>
          <TableCell 
            className={correctOption.isUpgrade === tower.isUpgrade? 'right' : 'wrong'} 
            align="center"
          >
            <label>
              {tower.isUpgrade? 'Is upgrade' : 'Is not upgrade'}
            </label>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  </TableContainer>
);

export default SelectedOptionsTable;