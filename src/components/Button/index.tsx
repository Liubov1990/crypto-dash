import React, { ButtonHTMLAttributes } from "react";
import * as S from "./styled";

function Button({
  children,
  ...buttonProps
}: ButtonHTMLAttributes<HTMLButtonElement>): React.ReactElement {
  return <S.StyledButton {...buttonProps}>{children}</S.StyledButton>;
}
export default Button;
