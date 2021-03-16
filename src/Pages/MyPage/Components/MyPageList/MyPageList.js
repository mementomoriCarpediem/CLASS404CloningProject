import React from 'react';
import styled from 'styled-components';
import Product from '../../../../Components/Product/Product';
import Blank from '../Blank/Blank';
import Title from '../Title/Title';

function MyPageList({ products, title }) {
  return (
    <MyPageListContainer>
      <Title title={title} />
      <ProductContainer>
        {products ? (
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
            />
          ))
        ) : (
          <Blank />
        )}
      </ProductContainer>
    </MyPageListContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  right: 12px;
  width: 900px;
`;

const MyPageListContainer = styled.div``;

export default MyPageList;
