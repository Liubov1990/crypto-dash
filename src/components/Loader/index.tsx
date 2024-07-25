import { ReactNode } from "react";
import * as S from "./styled";

function Loader({ height }: { height?: string }): ReactNode {
  return (
    <S.LoaderWrap height={height}>
      <S.LoaderSVG>
        <use xlinkHref="svg/sprite.svg#loader" />
      </S.LoaderSVG>
    </S.LoaderWrap>
  );
}

export default Loader;
