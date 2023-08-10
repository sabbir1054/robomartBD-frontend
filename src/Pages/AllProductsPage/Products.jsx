import React from 'react';

const Products = () => {
    return (
      
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          display={"flex"}
          justifyContent={"center"}
        >
          <SingleProductCard product={product} />
        </Grid>
     
    );
};

export default Products;