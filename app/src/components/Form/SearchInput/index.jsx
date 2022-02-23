import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment, TextField } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { useState } from "react";
import SearchContext from "../../../contexts/SearchContext";

const useStyles = makeStyles({
    inputSearch: {
        backgroundColor: 'white',
        boxShadow: '1px 1px 5px #e2e2e2',
        width: '100%',
        borderRadius: '4px',
    },
    fieldset: {
        border: 'transparent !important',
    },
    inputAdornment: {
        padding: '0 8px'
    },
});

const SearchInput = () => {
    const [search, setSearch] = useState("");
    const classes = useStyles();

    const handleChange = (event) => {
        setSearch(event.target.value);
    }

    return (
        <>
        <SearchContext.Provider value={search}>
            <TextField
                onChange={handleChange}
                type="search"
                value={search}
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
            </SearchContext.Provider>
        </>
    )
}

export default SearchInput;