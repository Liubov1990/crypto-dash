import React from "react";
import * as S from "./styled";

interface IButton {
  children: React.ReactNode | React.ReactNode[];
  onClick?: () => void;
}

function Button({ children, onClick }: IButton): React.ReactElement {
  return <S.StyledButton onClick={onClick}>{children}</S.StyledButton>;
}
export default Button;
