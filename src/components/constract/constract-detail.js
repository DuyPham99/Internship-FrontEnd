import {
  Box,
  Button, Card,
  CardContent,
  CardHeader,
  Divider,
  Grid, IconButton,
  TextField,
  Typography
} from '@mui/material';
import Review from './Review';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { useEffect } from 'react';
import { showPopup } from '../../features/contractSlice';
import CloseIcon from '@mui/icons-material/Close';

export const ContractDetail = (props) => {
  const products = [];
  // props.contract.products
  useEffect(() => {
    console.log(props.contract);
  });
  return (
    <Card sx={{ minWidth: 600 }}>
      <Grid container justifyContent="flex-end">
        <IconButton onClick={props.close}>
          <CloseIcon/>
        </IconButton>
      </Grid>
      <CardHeader
        title={`CONTRACT #${props.contract.id}`}
      />
      <CardContent>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Order summary
          </Typography>
          <List disablePadding>
            {props.contract.product.map((product) => (
              <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
                <ListItemText primary={product.name} secondary={product.name}/>
              </ListItem>
            ))}
            <Divider/>
            <ListItem sx={{ py: 1, px: 0 }}>
              <ListItemText primary="Amount"/>
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {props.contract.product.length}
              </Typography>
            </ListItem>
          </List>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Staff
              </Typography>
              <Typography gutterBottom>{`# ${props.contract.account.staff.id}`}</Typography>
              <Typography gutterBottom>{`Name: ${props.contract.account.staff.name}`}</Typography>
              <Typography
                gutterBottom>{`PN: ${props.contract.account.staff.phoneNumber}`}</Typography>
              <Typography
                gutterBottom>{`Company: ${props.contract.account.company.name} - ${props.contract.account.company.address}`}</Typography>
            </Grid>
            <Grid item container direction="column" xs={12} sm={6}>
              <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                Customer details
              </Typography>
              <Typography gutterBottom>{`Name: ${props.contract.customer.name}`}</Typography>
              <Typography gutterBottom>{`Age: ${props.contract.customer.age}`}</Typography>
              <Typography gutterBottom>{`Address: ${props.contract.customer.address}`}</Typography>
              <Typography gutterBottom>{`PN: ${props.contract.customer.phoneNumber}`}</Typography>
            </Grid>
          </Grid>
        </React.Fragment>
      </CardContent>
    </Card>
  );
};
