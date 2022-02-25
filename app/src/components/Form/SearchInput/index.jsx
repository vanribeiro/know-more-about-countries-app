import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment, TextField } from "@mui/material";
import styled from 'styled-components';

const Form = styled.form`
    width: 100%;
`;

const InputTypeSearch = styled(TextField)`
    background-color: ${({theme}) => theme.inputBackgroundColor};
    width: 100%;
    border-radius: 4px; 
    
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

const SearchInput = ({onSubmit, setClearInput}) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }
    
    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setClearInput(false);
    }

    const handleClickOnClearButton = () => {
        if(search !== ''){
            setSearch('');
            setClearInput(true);
        }
    }

    return (
        <>
            <Form onSubmit={handleSearchSubmit}>
                <InputTypeSearch
                    onChange={handleChange}
                    type="search"
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
            </Form>
        </>
    )
}

export default SearchInput;