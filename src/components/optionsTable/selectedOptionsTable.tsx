import "./selectedOptionsTable.css";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  Option,
  SpecialProperties,
  TowerClass,
  TowerTier,
} from "../../models/data";

import Icon from "@mdi/react";
import { mdiArrowDownBold, mdiArrowUpBold } from "@mdi/js";
import GameSettings from "../../models/settings";

interface SelectedOptionsTableProps {
  settings: GameSettings;
  selectedOptions: Option[];
  correctOption: Option;
}

const SelectedOptionsTable = ({
  settings,
  selectedOptions,
  correctOption,
}: SelectedOptionsTableProps) => {
  const compareSpecialProperties = (
    towerProperties: SpecialProperties[]
  ): string => {
    const correctProps = correctOption.specialProperties;
    if (correctProps.length === 0 && towerProperties.length === 0) {
      return "right";
    } else if (correctProps.length === 0 || towerProperties.length === 0) {
      return "wrong";
    } else {
      const match = towerProperties.filter((p) => {
        return correctProps.indexOf(p) !== -1;
      });
      if (match.length === 0) {
        return "wrong";
      } else if (correctProps.length !== towerProperties.length) {
        return "partiallyRight";
      } else if (match.length === correctProps.length) {
        return "right";
      } else {
        return "partiallyRight";
      }
    }
  };
  const compareTowerId = (towerName: string): string => {
    if (towerName === correctOption.value) {
      return "right";
    }
    const correctNameNoUp = correctOption.value.replace(/\d{3}/, "");
    const towerNameNoUp = towerName.replace(/\d{3}/, "");
    if (correctNameNoUp === towerNameNoUp) {
      return "partiallyRight";
    }
    return "wrong";
  };
  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Tower</TableCell>
            {settings.useUpgrades && (
              <TableCell align="center">Upgrade</TableCell>
            )}
            {settings.useUpgrades && (
              <TableCell align="center">UpgradeTier</TableCell>
            )}
            <TableCell align="center">Class</TableCell>
            <TableCell align="center">Cost</TableCell>
            <TableCell align="center">Special Properties</TableCell>
            <TableCell align="center">Attack damage</TableCell>
            <TableCell align="center">Range</TableCell>
            <TableCell align="center">Attack speed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {selectedOptions.map((tower) => (
            <TableRow key={tower.label} sx={{ border: 0 }}>
              <TableCell
                className={compareTowerId(tower.value)}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={tower.imageSrc}
                  alt={tower.label}
                  style={{
                    marginRight: 10,
                    width: 40,
                    height: 40,
                  }}
                />
                <Typography>{tower.label}</Typography>
              </TableCell>
              {settings.useUpgrades && (
                <TableCell
                  className={
                    correctOption.towerTier === tower.towerTier
                      ? "right"
                      : "partiallyRight"
                  }
                  align="center"
                >
                  <Typography>{TowerTier[tower.towerTier]}</Typography>
                  {correctOption.towerTier != tower.towerTier && (
                    <Icon
                      path={
                        correctOption.towerTier < tower.towerTier
                          ? mdiArrowDownBold
                          : mdiArrowUpBold
                      }
                      size={1}
                    />
                  )}
                </TableCell>
              )}
              <TableCell
                className={
                  correctOption.class === tower.class ? "right" : "wrong"
                }
                align="center"
              >
                <Typography>{TowerClass[tower.class]}</Typography>
              </TableCell>
              <TableCell
                className={
                  correctOption.cost === tower.cost ? "right" : "partiallyRight"
                }
                align="center"
              >
                <Typography>{tower.cost}</Typography>
                {correctOption.cost != tower.cost && (
                  <Icon
                    path={
                      correctOption.cost < tower.cost
                        ? mdiArrowDownBold
                        : mdiArrowUpBold
                    }
                    size={1}
                  />
                )}
              </TableCell>
              <TableCell
                className={compareSpecialProperties(tower.specialProperties)}
                align="center"
              >
                <Typography>
                  {tower.specialProperties.length === 0
                    ? "None"
                    : tower.specialProperties.map((prop) => {
                        return SpecialProperties[prop] + ", ";
                      })}
                </Typography>
              </TableCell>
              <TableCell
                className={
                  correctOption.attackDamage === tower.attackDamage
                    ? "right"
                    : "partiallyRight"
                }
                align="center"
              >
                <Typography>{tower.attackDamage}</Typography>
                {correctOption.attackDamage != tower.attackDamage && (
                  <Icon
                    path={
                      correctOption.attackDamage < tower.attackDamage
                        ? mdiArrowDownBold
                        : mdiArrowUpBold
                    }
                    size={1}
                  />
                )}
              </TableCell>
              <TableCell
                className={
                  correctOption.towerRange === tower.towerRange
                    ? "right"
                    : "partiallyRight"
                }
                align="center"
              >
                <Typography>{tower.towerRange}</Typography>
                {correctOption.towerRange != tower.towerRange && (
                  <Icon
                    path={
                      correctOption.towerRange < tower.towerRange
                        ? mdiArrowDownBold
                        : mdiArrowUpBold
                    }
                    size={1}
                  />
                )}
              </TableCell>
              <TableCell
                className={
                  correctOption.attackSpeed === tower.attackSpeed
                    ? "right"
                    : "partiallyRight"
                }
                align="center"
              >
                <Typography>{tower.attackSpeed}</Typography>
                {correctOption.attackSpeed != tower.attackSpeed && (
                  <Icon
                    path={
                      correctOption.attackSpeed < tower.attackSpeed
                        ? mdiArrowDownBold
                        : mdiArrowUpBold
                    }
                    size={1}
                  />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SelectedOptionsTable;
