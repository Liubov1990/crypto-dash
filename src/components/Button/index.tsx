import { ComponentPropsWithoutRef, ReactElement } from "react";
import * as S from "./styled";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  $width?: string;
}

function Button(props: ButtonProps): ReactElement {
  return <S.Btn {...props} />;
}
export default Button;
