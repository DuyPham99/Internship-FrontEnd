import { Box, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from '@mui/styles';

const initialValues = {
    username: "",
    password: "",
    company: ""
};

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            width: '90%',
            margin: theme.spacing(1)
        }
    },
    dropDownRole: {
        width: '30%',
        margin: theme.spacing(1)
    },
    dropDownCompany: {
        width: '90%',
        margin: theme.spacing(1)
    }
}))

export const AccountForm = () => {
    const { username, password, handleSubmit } = useForm();
    const [values, setValues] = useState();
    const classes = useStyles();

    return (
        <Box
            component="form"
            className={classes.root}
            noValidate
            autoComplete="off"
        >
            <Typography variant="h4" gutterBottom component="div">
                New Account
            </Typography>
            <Divider component="div" />
            <form>
                <Grid container>
                    <Grid item xs={6}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Username"
                            defaultValue=""
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            defaultValue=""
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                            className={classes.dropDownRole}
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                        <br></br>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={10}
                            label="Age"
                            className={classes.dropDownCompany}
                        // onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
                <Divider component="div" />
            </form>
        </Box>
    );
}

{/* <Box>
        <FormControl>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={5}>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue=""
                    />
                </Grid>
                <Grid item xs={2}>
                    <Select
                        labelId="demo-simple-select-label"
                        id="company"
                        value={10}
                        label="Role"
                    // onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            <TextField
                required
                id="outlined-required"
                label="Password"
                defaultValue=""
            />
        </FormControl>
        </Box> */}