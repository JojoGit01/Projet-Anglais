import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 5,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};

function getStyles(name, countryName, theme) {
  return {
    fontWeight:
      countryName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ChartList({dataCountry, setNameCountry}) {
  const classes = useStyles();
  const theme = useTheme();
  const [countryName, setcountryName] = React.useState("France");

  const handleChange = (event) => {
    setcountryName(event.target.value);
    setNameCountry(countryName)
  };

  return (
    <div>  
      <FormControl className={clsx(classes.formControl, classes.noLabel)}>
        <Select
          displayEmpty
          value={countryName}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>Country</em>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem disabled value="">
            <em>Select Country</em>
          </MenuItem>
          {dataCountry.map((data) => (
            <MenuItem key={data.Country} value={data.Country} style={getStyles(data.Country, countryName, theme)}>
              {data.Country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      
    </div>
  );
}