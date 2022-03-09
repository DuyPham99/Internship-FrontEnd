import { useEffect, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { IconButton } from '@mui/material';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import { deleteAccounts, getAllAccount } from 'src/api/accountApi';
import { AccountProfileDetails } from '../account1/account-profile-details';

export const AccountListResults = ({ ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccountList = async () => {
      try {
        const response = await getAllAccount();
        setAccounts(response);
        console.log("Success to ccount list from server");
      } catch (error) {
        console.log(error);
      }
    }
    fetchAccountList();
  }, accounts);


  const handleSelectAll = (event) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = accounts.map((customer) => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(1));
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(selectedCustomerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleClickDelete = (event) => {
    try {
      deleteAccounts(selectedCustomerIds);
      setAccounts(accounts.filter(account => {
        return selectedCustomerIds.includes(account.id)
      }));
      setSelectedCustomerIds([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card {...rest}>
      {/* <AccountProfileDetails /> */}
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === accounts.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < accounts.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Username
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Company
                </TableCell>
                <TableCell>
                  Role
                </TableCell>
                <TableCell>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.slice(0, limit).map((account) => (
                <TableRow
                  hover
                  key={account.id}
                  selected={selectedCustomerIds.indexOf(account.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(account.id) !== -1}
                      onChange={(event) => handleSelectOne(event, account.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={account.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(account.username)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {account.username}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {account.staff.name}
                  </TableCell>
                  <TableCell>
                    {account.company.name}
                  </TableCell>
                  <TableCell>
                    {account.role.id}
                  </TableCell>
                  <TableCell>
                    {/* {format(customer.createdAt, 'dd/MM/yyyy')} */}
                    <IconButton onClick={handleClickDelete}>
                      <DeleteOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={accounts.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

AccountListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
