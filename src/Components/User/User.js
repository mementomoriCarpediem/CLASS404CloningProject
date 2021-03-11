import React from 'react';
import styled, { css } from 'styled-components';

function User({ onClick, large, profile }) {
  console.log(profile);

  return (
    <UserProfile src={profile} alt="account" onClick={onClick} large={large} />
  );
}

const UserProfile = styled.img`
  width: 40px;
  border-radius: 50%;
  object-fit: cover;

  ${(props) =>
    props.large &&
    css`
      width: 56px;
      height: 56px;
    `}
`;

export default User;
