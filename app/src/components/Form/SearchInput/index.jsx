import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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

const SearchInput = ({onSubmit}) => {
    const [search, setSearch] = useState('');

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSubmit(search);
        setSearch('');
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
                            >
                                <FontAwesomeIcon 
                                    className="search-icon" 
                                    icon={faSearch} 
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