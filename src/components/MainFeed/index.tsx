import React from "react";

import * as S from "./style";
import Header from "../Header";
import WritePost from "../WritePost";
interface Props {}

const MainFeed: React.FC<Props> = () => {
  return (
    <S.MainWrapper>
      <S.MainFeedWrapper>
        <Header pageName="Main" />
        <WritePost />
      </S.MainFeedWrapper>
    </S.MainWrapper>
  );
};

export default MainFeed;
