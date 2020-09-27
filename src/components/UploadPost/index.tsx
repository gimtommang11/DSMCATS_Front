import React from "react";

import * as S from "./style";

interface Props {}

const UploadPost: React.FC<Props> = () => {
  return (
    <S.UploadPostWrapper>
      <S.WriteContent placeholder="오늘의 고양이는 어떤가요?" />
    </S.UploadPostWrapper>
  );
};

export default UploadPost;
