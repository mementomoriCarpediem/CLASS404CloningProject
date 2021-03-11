import React, { useState } from 'react';
import styled from 'styled-components';
import { KAKAO_API, SIGNUP_API } from '../../config';
import signUpProps from '../../signUpData';
import {
  FormHeader,
  Form,
  Button,
  UserContract,
  SnsLogin,
  LeftContainer,
} from '../Login/Login';

function Signup(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [repw, setRePw] = useState('');
  const [NameEmptyMsg, setNameEmptyMsg] = useState('');
  const [IdEmptyMsg, setIdEmptyMsg] = useState('');
  const [PwEmptyMsg, setPwEmptyMsg] = useState('');

  const { Kakao } = window;

  const kakaoLogin = (e) => {
    e.preventDefault();

    Kakao.Auth.login({
      success: function (authObj) {
        fetch(`${KAKAO_API}`, {
          method: 'GET',
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem('kakao_token', res.access_token);
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

  const SET = {
    email: setEmail,
    password: setPw,
    repassword: setRePw,
    name: setName,
  };

  const handleInput = (e) => {
    const setState = SET[e.target.id];
    setState(e.target.value);
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

  const goToLogin = (e) => {
    e.preventDefault();

    if (validation()) {
      fetch(`${SIGNUP_API}`, {
        method: 'POST',
        body: JSON.stringify({
          email: email,
          password: pw,
          name: name,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          data.AUTHORIZATION &&
            localStorage.setItem('class404_token', data.AUTHORIZATION);
          props.history.push('/login');
        });
    } else {
      console.log('Not Valid id or pw');
    }

    if (!name) {
      setNameEmptyMsg('⚠️ 이름을 입력해주세요!');
    }
    if (!email) {
      setIdEmptyMsg('⚠️ 이메일을 입력해주세요!');
    }
    if (!pw) {
      setPwEmptyMsg('⚠️ 비밀번호를 입력해주세요!');
    }
    if (pw !== repw) {
      setPwEmptyMsg('⚠️ 입력하신 비밀번호가 다릅니다!');
    }
  };

  return (
    <FormContainer className="Signup">
      <FormHeaderSignUp>{signUpProps.title}</FormHeaderSignUp>
      <FormSignUp>
        {signUpProps.input.map((input, index) => {
          return (
            <div key={index}>
              <label>
                {input.text}
                <input
                  id={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  onChange={handleInput}
                />
              </label>
              {NameEmptyMsg && input.name === 'name' && <p>{NameEmptyMsg}</p>}
              {IdEmptyMsg && input.name === 'email' && <p>{IdEmptyMsg}</p>}
              {PwEmptyMsg && input.name === 'password' && <p>{PwEmptyMsg}</p>}
              {input.name === 'password' && (
                <InputInfoMessage>
                  ⚠️ 영문 대문자/영문 소문자 및 숫자를 포함한 8~32자
                </InputInfoMessage>
              )}
            </div>
          );
        })}

        <ButtonSignUp onClick={goToLogin} className="signBtn">
          {signUpProps.button[0]}
        </ButtonSignUp>
        <UserContractSignup>
          <a href="www.naver.com">
            이용약관, 개인정보 수집 및 이용, 개인정보 제공
          </a>
          내용을 확인하였고 동의합니다.
        </UserContractSignup>
        <SnsLoginSignup>
          <ButtonSignUp className="snsButton" onClick={kakaoLogin}>
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/2462/2462844.svg?token=exp=1614761866~hmac=1cdc4a662e83328497ed72fee74e624a"
              alt="commentIcon"
            />
            {signUpProps.button[1]}
          </ButtonSignUp>
        </SnsLoginSignup>
      </FormSignUp>
    </FormContainer>
  );
}

export default Signup;

const FormContainer = styled(LeftContainer)`
  width: 470px;
`;

const FormHeaderSignUp = styled(FormHeader)``;

const FormSignUp = styled(Form)``;

const ButtonSignUp = styled(Button)``;

const InputInfoMessage = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.orange};
  margin: 0 auto 15px 0;
`;

const UserContractSignup = styled(UserContract)``;

const SnsLoginSignup = styled(SnsLogin)``;
