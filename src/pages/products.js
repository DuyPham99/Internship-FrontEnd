import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { useEffect, useState } from 'react';
import { getAllProduct } from 'src/api/productApis';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await getAllProduct();
        setProducts(response);
        console.log('Success to ccount list from server');
      } catch (error) {
        console.log(error);
      }
    };
    console.log(products);
    fetchProductList();
    console.log('Success to ccount list from server');
  }, []);

  return (
    <>
      <Head>
        <title>
          Products
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
          <ProductListToolbar/>
          <Box sx={{ pt: 3 }}>
            <Grid
              container
              spacing={3}
            >
              {products.map((product) => (
                <Grid
                  item
                  key={product.id}
                  lg={4}
                  md={6}
                  xs={12}
                >
                  <ProductCard product={product}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

Products.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Products;
