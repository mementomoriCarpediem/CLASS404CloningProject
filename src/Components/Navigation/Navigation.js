import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
  faChevronDown,
  faChevronUp,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import User from '../User/User';

function Navigation(props) {
  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAccountOn, setIsAccountOn] = useState(false);
  const [userName, setUserName] = useState('');
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    handleLogin();
  });

  const handleLogin = () => {
    if (
      localStorage.getItem('access_token') ||
      localStorage.getItem('kakao_token')
    ) {
      setIsLoggedIn(true);
      setUserName(localStorage.getItem('user_name'));
      setProfileImage(localStorage.getItem('profileImage'));
    }
  };

  const handleAccount = () => {
    setIsAccountOn(!isAccountOn);
  };

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <Nav>
      <NavWrapper>
        <Logo
          src="/images/logo.svg"
          alt="logo"
          onClick={() => history.push('/')}
        />
        <Wrapper>
          {isLoggedIn ? (
            <>
              <CreatorCenter onClick={() => history.push('/apply')}>
                크리에이터 센터
              </CreatorCenter>
              <MyClass onClick={() => history.push('/mypage')}>
                내 클래스
              </MyClass>
              <Heart onClick={() => history.push('/mypage')}>
                <FontAwesomeIcon icon={faHeart} />
              </Heart>
              <Account>
                <Wrapper onClick={handleAccount}>
                  <User profile={profileImage} />
                  <Arrow>
                    {isAccountOn ? (
                      <FontAwesomeIcon icon={faChevronUp} size="xs" />
                    ) : (
                      <FontAwesomeIcon icon={faChevronDown} size="xs" />
                    )}
                  </Arrow>
                </Wrapper>
                {isAccountOn && (
                  <AccountBox>
                    <UserInfo onClick={() => history.push('/mypage')}>
                      <User profile={profileImage} />
                      <BlockWrapper>
                        <UserName>{userName}</UserName>
                        <MyPage>마이페이지</MyPage>
                        <ArrowRight>
                          <FontAwesomeIcon icon={faChevronRight} />
                        </ArrowRight>
                      </BlockWrapper>
                    </UserInfo>
                    <Logout onClick={handleLogout}>로그아웃</Logout>
                  </AccountBox>
                )}
              </Account>
            </>
          ) : (
            <>
              <Creator onClick={() => history.push('/login')}>
                크리에이터 지원
              </Creator>
              <Login onClick={() => history.push('/login')}>로그인</Login>
            </>
          )}
        </Wrapper>
      </NavWrapper>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 64px;
  border-bottom: ${(props) => props.theme.border};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavWrapper = styled(Wrapper)`
  justify-content: space-between;
  width: 1176px;
  margin: auto;
`;

const Logo = styled.img`
  height: 17px;
  cursor: pointer;
`;

const Arrow = styled.div`
  margin-left: 10px;
`;

const Creator = styled.button`
  background: none;
  margin-right: 14px;
  font-size: 14px;
`;

const Login = styled(Creator)``;

const CreatorCenter = styled(Creator)``;

const MyClass = styled(Creator)``;

const Coupon = styled.button`
  margin-right: 16px;
  background: none;
  font-size: 18px;
`;

const Heart = styled(Coupon)``;

const BlockWrapper = styled.div`
  margin: 0 10px;
`;

const Account = styled.div`
  position: relative;
  display: flex;
  cursor: pointer;
`;

const Logout = styled.button`
  margin-top: 20px;
  font-size: 13px;
  background: none;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: ${(props) => props.theme.border};
`;

const UserName = styled.p``;

const MyPage = styled.span`
  font-size: 11px;
  margin-right: 2px;
  padding-top: 4px;
`;

const ArrowRight = styled.span`
  font-size: 7px;
`;

const AccountBox = styled.div`
  position: absolute;
  background: #fff;
  width: 200px;
  height: fit-content;
  padding: 20px;
  top: 80px;
  right: 0;
  font-size: 14px;
  filter: drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1));
`;

export default withRouter(Navigation);
