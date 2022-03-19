import * as React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select
} from '@mui/material';
import { DateRangePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import enLocale from 'date-fns/locale/en-US';
import { createContract } from '../../api/contractApi';
import { getAllProduct } from '../../api/productApis';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

export default function RegisterContractForm() {
  const [value, setValue] = React.useState([new Date(), new Date()]);
  const [products, setProducts] = React.useState([]);
  const { handleSubmit, reset, control, register } = useForm();
  const [data, setData] = useState([]);

  const handleChange = (event) => {
    console.log(event);
    const {
      target: { value }
    } = event;
    setProducts(
      typeof value === 'string' ? value.split(',') : value
    );
  };

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await getAllProduct();
        setData(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(products);
    fetchProductList();
    console.log('Success to ccount list from server');
  }, []);

  const onSubmit = (data) => {
    data.products = products;
    try {
      value[0] = new Date(value[0]).toLocaleDateString("vi-VN");
      value[1] = new Date(value[1]).toLocaleDateString("vi-VN");
    } catch (e) {

    }
    data.dateStart = value[0];
    data.dateEnd = value[1];
    data.status = "PENDING";
    createContract(data);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h6" gutterBottom>
        Infomation
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Controller
            name={'name'}
            control={control}
            rules={{ required: 'Name required'}}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <TextField
                id="name"
                // inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                name="name"
                label="Name"
                fullWidth
                onChange={onChange}
                value={value}
                error={!!error}
                helperText={error ? error.message : null}
                autoComplete="given-name"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Controller
            name={'age'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                id="age"
                name="age"
                label="Age"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                fullWidth
                rules={{ required: 'Age required' }}
                onChange={onChange}
                value={value}
                autoComplete="family-name"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Controller
            name={'email'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                id="email"
                name="email"
                label="Email"
                rules={{ required: 'Email required' }}
                fullWidth
                onChange={onChange}
                value={value}
                autoComplete="shipping address-line1"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Controller
            name={'address'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                required
                id="address"
                name="address"
                label="Address"
                rules={{ required: 'Address required' }}
                fullWidth
                onChange={onChange}
                value={value}
                autoComplete="shipping address-line1"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Controller
            name={'gender'}
            control={control}
            rules={{ required: 'Gender required' }}
            render={({ field: { onChange, value } }) => (
              <FormControl onChange={onChange}
                           value={value}>
                <FormLabel id="demo-row-radio-buttons-group-label" required>Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                >
                  <FormControlLabel value="false" control={<Radio/>} label="Female"/>
                  <FormControlLabel value="true" control={<Radio/>} label="Male"/>
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name={'phoneNumber'}
            control={control}
            render={({ field: { onChange, value } }) => (
              <TextField
                id="phoneNumber"
                name="phoneNumber"
                label="Phone Number"
                rules={{ required: 'Phone Number required' }}
                fullWidth
                onChange={onChange}
                value={value}
                autoComplete="shipping address-line2"
                variant="standard"
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl sx={{ mt: 2, width: 505 }}>
            <InputLabel id="demo-multiple-checkbox-label">Products</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              rules={{ required: 'Products required' }}
              value={products}
              onChange={handleChange}
              input={<OutlinedInput label="Tag"/>}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {data.map((product) => (
                <MenuItem key={product.id} value={product.name}>
                  <Checkbox checked={products.indexOf(product.name) > -1}/>
                  <ListItemText primary={product.name}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <input value={products} {...register("products")} type={"hidden"}/>
        </Grid>
        <input {...register("dateStart")} type={"hidden"}/>
        <input {...register("dateEnd")} type={"hidden"}/>
        <input {...register("status")} type={"hidden"}/>
        <Grid item xs={12} sx={{ mt: 3 }} sm={12}>
          <LocalizationProvider dateAdapter={AdapterDateFns} locale={enLocale}>
            <DateRangePicker
              startText="Start date"
              endText="End date"
              value={value}
              mask= "__/__/____"
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 5 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-end" sx={{ mt: 5 }}>
        <IconButton>
          <Button variant="contained" type="submit" >Register</Button>
        </IconButton>
      </Grid>
    </form>
  );
}
