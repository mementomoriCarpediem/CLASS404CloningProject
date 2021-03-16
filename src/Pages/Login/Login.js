import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { KAKAO_API, Login_API } from '../../config';
import signInProps from '../../signInData';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [IdEmptyMsg, setIdEmptyMsg] = useState('');
  const [PwEmptyMsg, setPwEmptyMsg] = useState('');

  const { Kakao } = window;

  const kakaoLogin = (e) => {
    e.preventDefault();

    Kakao.Auth.login({
      success: function (authObj) {
        console.log('kakao', authObj);

        fetch(`${KAKAO_API}`, {
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem('kakao_token', res.access_token);
            localStorage.setItem('profileImage', res.profileImage);
            localStorage.setItem('user_name', res.user_name);
            if (res.access_token) {
              alert('로그인 성공!');
              props.history.push('/');
            }
          });
      },

      fail: function (err) {
        alert('로그인 실패!');
        console.log('err', err);
      },
    });
  };

  const handleInput = (e) => {
    if (e.target.type === 'email') {
      setEmail(e.target.value);
    } else if (e.target.type === 'password') {
      setPw(e.target.value);
    }
  };

  const validation = () => {
    if (email) {
      const REGEXP_EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      const isGoodId = email.match(REGEXP_EMAIL);
      if (isGoodId && pw) {
        const REGEXP_PASSWORD_8to32CHARACTER = /^[0-9a-zA-Z]{8,32}$/i;
        const isGoodPw = pw.match(REGEXP_PASSWORD_8to32CHARACTER);
        if (isGoodPw) {
          return true;
        }
      }
    }
  };

  const goToMain = (e) => {
    e.preventDefault();

    if (validation()) {
      fetch(`${Login_API}`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: pw,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem('access_token', data.access_token);
          localStorage.setItem('profileImage', data.profileImage);
          localStorage.setItem('user_name', data.user_name);

          props.history.push('/');
        });
    } else {
      console.log('Not Valid id or pw');
    }

    if (!email) {
      setIdEmptyMsg('⚠️ 이메일을 입력해주세요!');
    }
    if (!pw) {
      setPwEmptyMsg('⚠️ 비밀번호를 입력해주세요!');
    }
  };

  return (
    <LoginContainer>
      <LeftContainer>
        <Top>
          <h2>CLASS404</h2>
          <span>🇰🇷한국어</span>
        </Top>
        <FormHeader>{signInProps.title}</FormHeader>
        <Form>
          {signInProps.input.map((input, index) => {
            return (
              <div key={index}>
                <label>
                  {input.text}
                  <input
                    id={input.type}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </label>
                {IdEmptyMsg && input.type === 'email' && <p>{IdEmptyMsg}</p>}
                {PwEmptyMsg && input.type === 'password' && <p>{PwEmptyMsg}</p>}

                {input.text === '비밀번호' && (
                  <ForgotPassword>
                    <span>비밀번호를 잊으셨나요?</span>
                    <Link to="/signup">
                      <span>회원가입하기</span>
                    </Link>
                  </ForgotPassword>
                )}
              </div>
            );
          })}

          <Button onClick={goToMain} className="signBtn">
            {signInProps.button[0]}
          </Button>

          <SnsLogin>
            <Button className="snsButton" onClick={kakaoLogin}>
              <img
                src="https://www.flaticon.com/svg/vstatic/svg/2462/2462844.svg?token=exp=1614761866~hmac=1cdc4a662e83328497ed72fee74e624a"
                alt="commentIcon"
              />
              {signInProps.button[1]}
            </Button>
          </SnsLogin>
          <UserContract>
            <a href="www.naver.com">
              이용약관, 개인정보 수집 및 이용, 개인정보 제공
            </a>
            내용을 확인하였고 동의합니다.
          </UserContract>
        </Form>
      </LeftContainer>
      <RightImage></RightImage>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 500px;
`;

export const LeftContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: auto 30px;
  margin: 100px auto;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  h2 {
    display: inline;
    font-size: 20px;
    font-weight: 900;
  }
`;

export const FormHeader = styled.header`
  width: 100%;
  margin: 20px 0px 50px 0px;
  font-size: 30px;
  font-weight: 600;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    width: 100%;
    margin-right: auto;
    font-size: 14px;
  }

  input {
    width: 100%;
    height: 50px;
    margin: 10px 0;
    border: ${({ theme }) => theme.border};
    border-radius: 5px;
  }

  p {
    margin: 0 0 10px 0;
    font-size: 12px;
    color: ${({ theme }) => theme.red};
  }
`;

const ForgotPassword = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;

  &.signBtn {
    color: white;
    background-color: ${({ theme }) => theme.orange};
  }

  &.snsButton {
    background-color: #f7d41d;

    img {
      width: 23px;
      margin-right: 5px;
      vertical-algin: center;
    }
  }
`;

export const UserContract = styled.div`
  font-size: 12px;
  margin: 20px auto;
  color: ${({ theme }) => theme.gray};

  a {
    color: skyblue;
  }
`;

export const SnsLogin = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 100%;
  color: black;
  border-top: ${({ theme }) => theme.border};

  p {
    margin: 20px auto;
  }
`;

const RightImage = styled.aside`
  @media (min-width: 1050px) {
    float: right;
    width: 60%;
    height: 100vh;
    background: no-repeat
      url('https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80');
    background-size: cover;
  }
`;
