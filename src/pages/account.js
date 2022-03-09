import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import { AccountProfileDetails } from 'src/components/account1/account-profile-details';
import { AccountListResults } from '../components/account/account-list-results';
import { CustomerListToolbar } from '../components/account/account-list-toolbar';
import { AccountForm } from '../components/account/form-create-account';
import { DashboardLayout } from '../components/dashboard-layout';


const Accounts = () => {
  const [check, setCheck] = useState(false);

  const clickShowForm = () => {
    setCheck(!check);
  }

  return (
    <>
      {check && <AccountProfileDetails />}
      <Head>
        <title>
          Accounts | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth={false}>
          <CustomerListToolbar clickShowForm = {clickShowForm} />
          <Box sx={{ mt: 3 }}>
            <AccountListResults />
          </Box>
        </Container>
      </Box>
    </>
  );
}

Accounts.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Accounts;
