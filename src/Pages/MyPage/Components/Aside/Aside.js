import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MenuTitle from "../MenuTitle/MenuTitle";
import MenuLink from "../MenuLink/MenuLink";

function Aside({ handleMenu, currentId }) {
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push("/");
  };

  const menuOn = () => {
    if (currentId === 2) {
      return "likeOn";
    } else if (currentId === 3) {
      return "buyOn";
    } else if (currentId === 4) {
      return "createOn";
    }
  };

  return (
    <AsideContainer>
      <MenuTitle name="수강생" />
      <MenuLink id={2} onClick={() => handleMenu(2)} name="찜한 클래스" />
      <MenuLink
        id={3}
        onClick={() => handleMenu(3)}
        name="수강 등록한 클래스"
      />
      <Blank />
      <MenuTitle name="크리에이터" />
      <MenuLink id={4} onClick={() => handleMenu(4)} name="내가 만든 클래스" />
      <Blank />
      <MenuTitle name="메뉴" />
      <MenuLink onClick={logout} name="로그아웃" />
    </AsideContainer>
  );
}

const Blank = styled.div`
  height: 20px;
`;

const AsideContainer = styled.div`
  width: 264px;
`;

export default Aside;
