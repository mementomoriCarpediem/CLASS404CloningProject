import React from 'react';
import styled from 'styled-components';
import Product from '../Product/Product';

function ProductList({ products }) {
  return (
    <ProductListContainer>
      {products &&
        products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            likeCount={product.likeCount}
            like={product.like}
            category={product.category}
            userName={product.userName}
            title={product.title}
            price={product.price}
            gift={product.gift}
            reviewNumber={product.reviewNumber}
          />
        ))}
    </ProductListContainer>
  );
}

const ProductListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  min-height: 600px;
  margin: 0px -12px -32px;
`;

export default ProductList;
