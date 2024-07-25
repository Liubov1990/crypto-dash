import { ReactNode } from "react";
import * as S from "./styled";

function ErrorMessage(): ReactNode {
  return <S.ErrorWrap>Data is currently unavailable!</S.ErrorWrap>;
}

export default ErrorMessage;
