import React from "react";
import styled from "styled-components";

function Blank(props) {
  return (
    <BlankContainer>
      <AlerMsg>클래스가 없습니다</AlerMsg>
    </BlankContainer>
  );
}

const AlerMsg = styled.p`
  font-size: 14px;
  text-align: center;
  color: ${(props) => props.theme.gray};
`;

const BlankContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
`;

export default Blank;
