import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';
import PropTypes from 'prop-types';

export const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        <Avatar
          alt="Product"
          src={product.imagesPath}
          variant="square"
          sx={{ width: 200, height: 100 }}
        />
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {product.name}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {product.shortDescription}
      </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};
