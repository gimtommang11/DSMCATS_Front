import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { mainColor } from "../../../GlobalStyle";

export const SideNavigationBarItem = styled(NavLink)`
  display: flex;
  width: 9.438rem;
  height: 2.75rem;
  border-radius: 1.375rem;
  border: "1px solid #badcf0";
  background: "#FFF";
  margin-bottom: 0.9375rem;
  flex-direction: row;
  align-items: center;

`;

export const SideNavigationNarItemIcon = styled.img`
  width: 1.25rem;
  height: 1.25rem;
  margin-left: 1.375rem;
  margin-right: 1.5rem;
`;

export const SideNavigationNarItemName = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${mainColor};
`;
