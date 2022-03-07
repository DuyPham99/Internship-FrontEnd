import { Box, Container } from '@mui/material';
import Head from 'next/head';
import { AccountListResults } from '../components/account/account-list-results';
import { CustomerListToolbar } from '../components/account/account-list-toolbar';
import { AccountForm } from '../components/account/form-create-account';
import { DashboardLayout } from '../components/dashboard-layout';


const Accounts = () => {
  return (
    <>
      <AccountForm></AccountForm>
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
          <CustomerListToolbar />
          <Box sx={{ mt: 3 }}>
            <AccountListResults/>
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
