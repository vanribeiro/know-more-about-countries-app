import { InputBase, MenuItem, Select, styled } from "@mui/material";
import { useState } from "react";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    '& .MuiInputBase-input': {
      borderRadius: 4,
      fontWeight: 600,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid transparent',
      fontSize: 14,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      boxShadow: '1px 1px 5px #e2e2e2',
      fontFamily: [
        '"Nunito Sans", "sans-serif"'
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));


const SelectInput = () => {
    const [continent, setContinent] = useState('');

    const handleChange = (event) => {
      setContinent(event.target.value);
    };

    return(
        <>
            <Select
                sx={{width: '100%'}}
                id="select-filter"
                onChange={handleChange}
                value={continent}
                displayEmpty
                placeholder="Find By Region"
                variant="outlined"
                input={<BootstrapInput />}
            >
                <MenuItem value="" style={{display:'none'}}>Find By Region</MenuItem>
                <MenuItem value="africa">Africa</MenuItem>
                <MenuItem value="america">America</MenuItem>
                <MenuItem value="asia">Asia</MenuItem>
                <MenuItem value="europe">Europe</MenuItem>
                <MenuItem value="oceania">Oceania</MenuItem>
            </Select>
        </>
    );
}

export default SelectInput;