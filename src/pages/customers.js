import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import { useEffect, useState } from 'react';
import { accountApi } from 'src/api/accountApi';


const Customers = () => {
  const [accountList, setAccountList] = useState([]);

  useEffect(() => {
    const fetchAccountList = async () => {
      try {
        const response = await accountApi.getAll();
        setAccountList(response.data);
        alert("1")
        console.log("Success to ccount list from server");
      } catch(error) {
        alert("1")
        console.log("Cant get account list from server");
      }
    }
  }, []);

  return (
    <>
      <Head>
        <title>
          Customers | Material Kit
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
            <CustomerListResults customers={accountList} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Customers;
