import * as S from "./styled";

function Button({ children, ...buttonProps }: any): React.ReactElement {
  return <S.Btn {...buttonProps}>{children}</S.Btn>;
}
export default Button;
