import React from "react";
import { Link } from "react-router-dom";

import * as S from "./style";
import * as I from "../../assets";
import SideNavigationBarItem from "./SideNavigationBarItem";

interface Props {}

const SideNavigationBar: React.FC<Props> = () => {
  return (
    <S.SideNavigationBarWrapper>
      <Link to="/">
        <S.LogoWrapper src={I.sidebar.logo} />
      </Link>
      <SideNavigationBarItem
        routeName="/"
        navigationItemIcon={I.sidebar.home}
        navigationItemName="Home"
      />
      <SideNavigationBarItem
        routeName="/cats"
        navigationItemIcon={I.sidebar.cat}
        navigationItemName="Cat"
      />
      <SideNavigationBarItem
        routeName="/mypage"
        navigationItemIcon={I.sidebar.user}
        navigationItemName="Profile"
      />
    </S.SideNavigationBarWrapper>
  );
};

export default SideNavigationBar;
