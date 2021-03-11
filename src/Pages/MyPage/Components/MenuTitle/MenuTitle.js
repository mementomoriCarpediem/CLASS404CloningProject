import React from "react";
import styled from "styled-components";

function MenuTitle({ name }) {
  return <Title>{name}</Title>;
}

const Title = styled.p`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 600;
`;

export default MenuTitle;
