import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment, TextField } from "@mui/material";
import styled from 'styled-components';

const InputTypeSearch = styled(TextField)`
    background-color: ${({theme}) => theme.inputBackgroundColor};
    border-radius: 4px; 
    width: 100%;

    @media screen and (min-width:1200px){
        width: 90%;
    }

    @media screen and (min-width:1200px){
        width: 70%;
    }

    fieldset{
        border: transparent !important;
        box-shadow: 1px 1px 5px ${({theme}) => theme.inputBoxShadowColor}; 
    }

    ::placeholder,
    .search-icon,
    input {
        color: ${({theme}) => theme.text};
    }
`;

const SearchInput = ({onSearchSubmit, setClearInput}) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        let value = event.target.value;
        if(value === ''){
            setSearch('');
            onSearchSubmit('');
            setClearInput(true);
        } else {
            setSearch(value);
            onSearchSubmit(search);
            setClearInput(false);
        }
    }

    const handleClickOnClearButton = () => {
        if(search !== ''){
            setSearch('');
            setClearInput(true);
        }
    }

    return (
        <>
            <InputTypeSearch
                onChange={handleChange}
                type="text"
                value={search}
                id="search-country"
                placeholder="Search for a country..."
                inputProps={{ 'aria-label': 'Without label' }}
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment
                            position="start"
                            onClick={handleClickOnClearButton}
                            sx={{cursor: 'pointer'}}
                        >
                            <FontAwesomeIcon 
                                className="search-icon" 
                                icon={search === '' ? faSearch : faClose} 
                            />
                        </InputAdornment>
                    ),
                }}
            />
        </>
    )
}

export default SearchInput;