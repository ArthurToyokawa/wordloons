import React from 'react';
import './selectedOptionsTable.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Option, TowerClass } from '../models/data';

import Icon from '@mdi/react';
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js';



interface SelectedOptionsTableProps {
  selectedOptions: Option[];
  correctOption: Option;
}

const SelectedOptionsTable = ({selectedOptions, correctOption}: SelectedOptionsTableProps) => (
  <TableContainer>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell align="center">Tower</TableCell>
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
          <TableCell className='tableCell'>
          <img src={tower.imageSrc} alt={tower.label} 
            style={{
                marginRight: 10,
                width: 40,
                height: 40,
              }} 
            />
            <Typography>
              {tower.label}
            </Typography>
          </TableCell>
          <TableCell 
            className={correctOption.class === tower.class? 'right tableCell' : 'wrong tableCell'} 
            align="center"
          >
            <Typography>
              {TowerClass[tower.class]}
            </Typography>
          </TableCell>
          <TableCell 
            className={correctOption.cost === tower.cost? 'right' : 'partiallyRight'} 
            align="center"
          >
            <Typography>
              {tower.cost}
            </Typography>
            { correctOption.cost != tower.cost &&
              <Icon path={correctOption.cost < tower.cost? mdiArrowDownBold : mdiArrowUpBold} size={1} />
            }
          </TableCell>
          <TableCell 
            className={correctOption.isUpgrade === tower.isUpgrade? 'right' : 'wrong'} 
            align="center"
          >
            <Typography>
              {tower.isUpgrade? 'Is upgrade' : 'Is not upgrade'}
            </Typography>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
  </TableContainer>
);

export default SelectedOptionsTable;