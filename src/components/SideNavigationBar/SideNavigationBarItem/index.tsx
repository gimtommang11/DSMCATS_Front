import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import * as S from "./style";
import { mainGradient } from "GlobalStyle";

interface Props {
  navigationItemIcon: any;
  navigationItemName: string;
  routeName: string;
}

const SideNavigationBarItem: React.FC<Props> = ({
  navigationItemIcon,
  navigationItemName,
  routeName,
}) => {
  return (
    <S.SideNavigationBarItem
      exact
      to={routeName}
      activeStyle={{ background: mainGradient }}
    >
      <S.SideNavigationNarItemIcon src={navigationItemIcon} />
      <S.SideNavigationNarItemName>
        {navigationItemName}
      </S.SideNavigationNarItemName>
    </S.SideNavigationBarItem>
  );
};

export default SideNavigationBarItem;
