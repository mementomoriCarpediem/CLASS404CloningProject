import React, { useEffect } from 'react';
import styled from 'styled-components';
import Product from '../../../../Components/Product/Product';
import Title from '../Title/Title';
import Blank from '../Blank/Blank';
import { useHistory } from 'react-router';

function MyPageMain({ productLike, productBuy, productCreate, queryString }) {
  const history = useHistory();
  useEffect(() => {
    history.push(queryString);
  }, []);

  return (
    <MyPageMainContainer>
      <Title title="찜한 클래스" moreLink="" dataLength={productLike} />
      <ProductList>
        {productLike.length ? (
          productLike.map((product) => (
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
      </ProductList>
      <Title title="수강 등록한 클래스" dataLength={productBuy} />
      <ProductList>
        {productBuy.length ? (
          productBuy.map((product) => (
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
      </ProductList>
      <Title title="내가 만든 클래스" dataLength={productCreate} />
      <ProductList>
        {productCreate.length ? (
          productCreate.map((product) => (
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
      </ProductList>
    </MyPageMainContainer>
  );
}

const MyPageMainContainer = styled.div``;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  right: -12px;
  width: 900px;
  margin-bottom: 100px;
`;

export default MyPageMain;
