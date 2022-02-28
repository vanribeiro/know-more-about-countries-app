import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment } from "@mui/material";
import { InputTypeSearch } from "./style";

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