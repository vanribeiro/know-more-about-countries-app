import Container from "../Container";
import styled from "styled-components";
import { InputAdornment, MenuItem, Select, TextField } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const useStyles = makeStyles({
    inputSearch: {
        backgroundColor: 'white',
        boxShadow: '1px 1px 5px #f5f5f5',
        width: '100%',
        borderRadius: '4px',
    },
    fieldset: {
        border: 'transparent !important',
    },
    inputAdornment: {
        padding: '0 8px'
    },
    selectFilter: {
        width: '100%'
    },
});

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    @media screen and (max-width:767px){
        width: 100%;
        flex-direction: column;
        gap: 10px;
    }
`;

const BoxInput = styled.div`
    width: 50%;

    @media screen and (max-width:767px){
        width: 100%;
    }
`;

const BoxSelect = styled.div`
    width: 30%;

    @media screen and (max-width: 767px){
        width: 100%;
    }
`;

const Filters = () => {
    const [continent, setContinent] = useState('');
    const classes = useStyles();

    const handleChange = (event) => {
      setContinent(event.target.value);
    };
  
    return (
        <>
            <Container>
                <FlexContainer>
                    <BoxInput>
                        <TextField
                            type="search"
                            className={classes.inputSearch}
                            id="search-country"
                            placeholder="Search for a country..."
                            inputProps={{ 'aria-label': 'Without label' }}
                            variant="outlined"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        className={classes.inputAdornment}
                                        position="start"
                                    >
                                        <FontAwesomeIcon icon={faSearch} />
                                    </InputAdornment>
                                ),
                                classes:{notchedOutline: classes.fieldset}
                            }}
                        />
                    </BoxInput>
                    <BoxSelect>
                        <Select
                            id="demo-simple-select"
                            onChange={handleChange}
                            value={continent}
                            className={classes.selectFilter}
                            classes={{notchedOutline: classes.input}}
                            displayEmpty
                            placeholder="Find By Region"
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="" style={{display:'none'}}>Find By Region</MenuItem>
                            <MenuItem value="africa">Africa</MenuItem>
                            <MenuItem value="america">America</MenuItem>
                            <MenuItem value="asia">Asia</MenuItem>
                            <MenuItem value="europe">Europe</MenuItem>
                            <MenuItem value="oceania">Oceania</MenuItem>
                        </Select>
                    </BoxSelect>
                </FlexContainer>
            </Container>
        </>
    );
};

export default Filters;
