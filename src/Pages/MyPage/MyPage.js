import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../Components/Navigation/Navigation';
import UserInfo from './Components/UserInfo/UserInfo';
import Aside from './Components/Aside/Aside';
import MyPageMain from './Components/MyPageMain/MyPageMain';
import MyPageLike from './Components/MyPageLike/MyPageLike';
import MyPageBuy from './Components/MyPageBuy/MyPageBuy';
import MyPageCreate from './Components/MyPageCreate/MyPageCreate';
import { MYPAGE_API } from '../../config';

function MyPage() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userProfile, setUserProfile] = useState('');
  const [productLikeData, setProductLiikeData] = useState([]);
  const [productBuyData, setProductBuyData] = useState([]);
  const [productCreateData, setProductCreateData] = useState([]);
  const [currentId, setCurrentId] = useState(1);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = () => {
    fetch(MYPAGE_API, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUserName(res.userName);
        setUserEmail(res.userEmail);
        setUserProfile(localStorage.getItem('profileImage'));
        setProductLiikeData(res.productLike);
        setProductBuyData(res.productBuy);
        setProductCreateData(res.productCreate);
      });
  };

  const handleMenu = (id) => {
    setCurrentId(id);
  };

  const MAPPING_MENU = {
    1: (
      <MyPageMain
        productLike={productLikeData}
        productBuy={productBuyData}
        productCreate={productCreateData}
        queryString="/mypage"
      />
    ),
    2: <MyPageLike queryString="?class=like" />,
    3: <MyPageBuy queryString="?class=buy" />,
    4: <MyPageCreate queryString="?class=create" />,
  };

  return (
    <MyPageContainer>
      <Navigation />
      <MyPageWrapper>
        <UserInfo
          userName={userName}
          userEmail={userEmail}
          onClick={() => handleMenu(1)}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />
        <ContentWrapper>
          <Aside handleMenu={handleMenu} currentId={currentId} />
          <ProductListContainer>
            {getProduct && MAPPING_MENU[currentId]}
          </ProductListContainer>
        </ContentWrapper>
      </MyPageWrapper>
    </MyPageContainer>
  );
}

const ProductListContainer = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  position: relative;
`;

const MyPageContainer = styled.div``;

const MyPageWrapper = styled.div`
  width: 1176px;
  margin: auto;
`;

export default withRouter(MyPage);
