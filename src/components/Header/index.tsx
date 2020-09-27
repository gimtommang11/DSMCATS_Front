import React from "react";

import * as S from "./style";

interface Props {
  pageName: string;
}

const Header: React.FC<Props> = ({ pageName }) => {
  return (
    <S.HeaderWrapper>
      <S.HeaderName>{pageName}</S.HeaderName>
    </S.HeaderWrapper>
  );
};

export default Header;
