import React from 'react';
import './selectedOptionsTable.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Option, SpecialProperties, TowerClass } from '../models/data';

import Icon from '@mdi/react';
import { mdiArrowDownBold, mdiArrowUpBold } from '@mdi/js';



interface SelectedOptionsTableProps {
  selectedOptions: Option[];
  correctOption: Option;
}

const SelectedOptionsTable = ({selectedOptions, correctOption}: SelectedOptionsTableProps) => {
  const compareSpecialProperties = (towerProperties: SpecialProperties[]): string => {
    const correctPs = correctOption.specialProperties;
    if(correctPs.length === 0 && towerProperties.length === 0) {
      return 'right';
    } else if (correctPs.length === 0 || towerProperties.length === 0) {
      return 'wrong';
    } else {
      const match = towerProperties.map((p) => {
        return correctPs.indexOf(p) !== -1
      })
      if(match.length === 0) {
        return 'wrong';
      }
      else if(match.length === correctPs.length) {
        return 'right';
      }
      else {
        return 'partiallyRight';
      }
    }
  }

  return (
    <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Tower</TableCell>
          <TableCell align="center">Class</TableCell>
          <TableCell align="center">Cost</TableCell>
          <TableCell align="center">Special Properties</TableCell>
          <TableCell align="center">Attack damage</TableCell>
          <TableCell align="center">Range</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {selectedOptions.map((tower) => (
          <TableRow
            key={tower.label}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell className={correctOption.class === tower.class? 'right tableCell' : 'wrong tableCell'} >
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
              className={compareSpecialProperties(tower.specialProperties)} 
              align="center"
            >
              <Typography>
                {tower.specialProperties.length === 0? 'None': 
                tower.specialProperties.map(prop => {
                  return (SpecialProperties[prop]+', ')
                })}
              </Typography>
            </TableCell>
            <TableCell 
              className={correctOption.attackDamage === tower.attackDamage? 'right' : 'partiallyRight'} 
              align="center"
            >
              <Typography>
                {tower.attackDamage}
              </Typography>
              { correctOption.attackDamage != tower.attackDamage &&
                <Icon path={correctOption.attackDamage < tower.attackDamage? mdiArrowDownBold : mdiArrowUpBold} size={1} />
              }
            </TableCell>
            <TableCell 
              className={correctOption.towerRange === tower.towerRange? 'right' : 'partiallyRight'} 
              align="center"
            >
              <Typography>
                {tower.towerRange}
              </Typography>
              { correctOption.towerRange != tower.towerRange &&
                <Icon path={correctOption.towerRange < tower.towerRange? mdiArrowDownBold : mdiArrowUpBold} size={1} />
              }
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  );
}

export default SelectedOptionsTable;