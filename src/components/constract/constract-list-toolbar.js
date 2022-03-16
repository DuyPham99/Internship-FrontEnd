import {
  Box,
  Button,
  Card,
  CardContent,
  InputAdornment,
  SvgIcon,
  TextField,
  Typography
} from '@mui/material';
import { useState } from 'react';
import React from 'react'
import { Search as SearchIcon } from '../../icons/search';
import { useDispatch, useSelector } from 'react-redux';
import { showPopup } from '../../features/contractSlice';

export const ContractListToolbar = (props) => {
  const [titleButton, setTitleButton] = useState('Add Contracts');
  const count = useSelector(state => state.contract.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    setTitleButton(titleButton == 'Add Accounts' ? 'Close' : 'Add Contracts');
    dispatch(showPopup());
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Contracts
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClick}
          >
            {titleButton}
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon
                        color="action"
                        fontSize="small"
                      >
                        <SearchIcon/>
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search account"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};
