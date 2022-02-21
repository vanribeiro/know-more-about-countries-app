import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { InputAdornment, TextField } from "@mui/material";
import { makeStyles } from '@material-ui/styles';

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
    const classes = useStyles();
    return (
        <>
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
        </>
    )
}

export default SearchInput;