import { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import { getAllAccount, getAllRole, saveAccount } from '../../api/accountApi';
import { getAllCompany } from '../../api/companyApi';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      width: '90%'
      // margin: theme.spacing(1)
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
}));

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({});
  // const [values, setValues] = useState();
  const classes = useStyles();
  const [listCompany, setListCompany] = useState([]);
  const [listRole, setListRole] = useState([]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  useEffect(() => {
    const fetchCompanyList = async () => {
      try {
        const response = await getAllCompany();
        setListCompany(response);
        console.log("Success to ccount list from server");
      } catch (error) {
        console.log(error);
      }
    }
    fetchCompanyList();
  }, listCompany);

  useEffect(() => {
    const fetchRoleList = async () => {
      try {
        const response = await getAllRole();
        setListRole(response);
        console.log("Success to ccount list from server");
      } catch (error) {
        console.log(error);
      }
    }
    fetchRoleList();
  }, listRole);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    company: Yup.string()
                .required('Company is required'),
    firstName: Yup.string()
                  .required('FirstName is required'),
    lastName: Yup.string()
                 .required('LastName is required'),
    phone: Yup.string()
              .required('Phone Number is required'),
    email: Yup.string()
              .required('Email is required')
              .email('Email is invalid'),
    password: Yup.string()
                 .required('Password is required')
                 .min(6, 'Password must be at least 6 characters')
                 .max(20, 'Password must not exceed 20 characters'),
    role: Yup.string()
             .required('Role is required')

  });
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm({ resolver: yupResolver(validationSchema) });

  const onSubmit = (data) => {
    const saveAccount1 = async () => {
      try {
        const response = await saveAccount(data);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
    saveAccount1();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
          noValidate
          {...props}
    >
      <Card>
        <CardHeader
          title="New Account"
        />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField

                fullWidth
                label="Username"
                name="username"
                required
                onChange={handleChange}
                value={values.username}
                variant="outlined"
                {...register('username')}
                error={errors.username ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.username?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Company"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
                {...register('company')}
                error={errors.company ? true : false}
              >
                {listCompany.map((option) => (
                  <option
                    key={option.id}
                    // value={option.id}
                  >
                    {option.name}
                  </option>
                ))}
              </TextField>
              <Typography variant="inherit" color="red">
                {errors.company?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Password"
                type="password"
                name="password"
                onChange={handleChange}
                required
                value={values.password}
                variant="outlined"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.password?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Role"
                name="role"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.role}
                variant="outlined"
                {...register('role')}
                error={errors.role ? true : false}
              >
                {listRole.map((role) => (
                  <option
                    key={role}
                    value={role}
                  >
                    {role}
                  </option>
                ))}
              </TextField>
              <Typography variant="inherit" color="red">
                {errors.role?.message}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>


        <Divider/>

        <CardHeader
          title="Infomation"
        />
        <Divider/>
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="First name"
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                required
                variant="outlined"
                {...register('firstName')}
                error={errors.firstName ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.firstName?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Address"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
                {...register('lastName')}
                error={errors.lastName ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.lastName?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.email?.message}
              </Typography>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
                {...register('phone')}
                error={errors.phone ? true : false}
              />
              <Typography variant="inherit" color="red">
                {errors.phone?.message}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <Divider/>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            type="submit"
            color="primary"
            variant="contained"
          >
            Save
          </Button>
        </Box>
      </Card>
    </form>
  );
};
