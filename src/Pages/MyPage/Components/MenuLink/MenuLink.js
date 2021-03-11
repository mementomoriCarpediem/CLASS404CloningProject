import React from "react";
import styled, { css } from "styled-components";

function MenuLink({ name, onClick, on }) {
  return (
    <MenuContainer onClick={onClick} on={on}>
      {name}
    </MenuContainer>
  );
}

const MenuContainer = styled.p`
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
  ${(props) =>
    props.on &&
    css`
      color: ${(props) => props.theme.orange};
    `}
`;

export default MenuLink;
