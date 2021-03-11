import React, { useState } from 'react';
import styled from 'styled-components';
import { MYPAGE_API } from '../../../../config';
import User from '../../../../Components/User/User';

function UserInfo({
  userName,
  userEmail,
  onClick,
  userProfile,
  setUserProfile,
}) {
  const [isEditorOn, setIsEditorOn] = useState(false);
  const changeProfile = () => {
    setIsEditorOn(!isEditorOn);
  };

  const inputImg = (e) => {
    const img = e.target.files[0];
    const formData = new FormData();

    formData.append('fileName', img);

    fetch(`${MYPAGE_API}/image`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        setUserProfile(res.file_url);
        localStorage.setItem('profileImage', res.file_url);
      });

    setIsEditorOn(!isEditorOn);
  };

  return (
    <UserInfoContainer>
      <Wrapper>
        <User large profile={userProfile} onClick={changeProfile} />
        <Wrap onClick={onClick}>
          <UserName>{userName} </UserName>
          <UserEmail>{userEmail}</UserEmail>
        </Wrap>
        {isEditorOn && (
          <>
            <input type="file" onChange={inputImg} />
          </>
        )}
      </Wrapper>
    </UserInfoContainer>
  );
}

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Wrap = styled.div`
  margin: 0 40px 0 10px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const UserName = styled.span`
  font-size: 20px;
  font-weight: 600;
`;

const UserEmail = styled.p`
  margin-top: 8px;
  margin-left: 2px;
  font-size: 12px;
  color: ${(props) => props.theme.gray};
`;

export default UserInfo;
