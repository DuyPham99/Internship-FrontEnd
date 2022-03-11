import Head from 'next/head';
import { Box, Container, Dialog } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { ContractListToolbar } from '../components/constract/constract-list-toolbar';
import { ContractListResults } from '../components/constract/contract-list-results';
import Checkout from '../components/constract/contract-form';
import { useDispatch, useSelector } from 'react-redux';

const Contract = () => {
  const openPopup = useSelector(state => state.contract.value);
  const dispatch = useDispatch();

  return (
    <>
      <Dialog open={openPopup}>
        <Checkout/>
      </Dialog>
      <Head>
        <title>
          Contract
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
          <ContractListToolbar/>
          <Box sx={{ mt: 3 }}>
            <ContractListResults/>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Contract.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Contract;
