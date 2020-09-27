import styled from "styled-components";

import { mainColor } from "../../GlobalStyle";

export const HeaderWrapper = styled.div`
  display: flex;
  width: inherit;
  height: 3.563rem;
  border: 1px solid #f5f8fa;
  align-items: center;
`;

export const HeaderName = styled.div`
  margin-left: 1.125rem;
  font-size: 1.25rem;
  color: ${mainColor};
`;
