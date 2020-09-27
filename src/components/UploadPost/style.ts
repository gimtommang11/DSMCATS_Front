import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import { mainColor } from "GlobalStyle";

export const UploadPostWrapper = styled.div`
  width: 7.438rem;
`;

export const WriteContent = styled(TextareaAutosize)`
  width: 34.2rem;
  padding: 1.5rem 1.625rem;
  resize: none;
  font-size: 1.25rem;
  color : ${mainColor}
  &:placeholder {
    font-size: 1.25rem;
  }
`;

export const UploadImgButton = styled.input`
    
`