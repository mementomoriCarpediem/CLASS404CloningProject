import React from "react";
import styled from "styled-components";

function Title({ title, moreLink, dataLength }) {
  return (
    <TitleConatiner>
      <TitleName>{title}</TitleName>
      {dataLength > 3 && <MoreBtn onClick={{ moreLink }}>더보기</MoreBtn>}
    </TitleConatiner>
  );
}

const TitleConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 30px 12px;
`;
const TitleName = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const MoreBtn = styled.button`
  background: none;
  color: ${(props) => props.theme.gray};
`;

export default Title;
