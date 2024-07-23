import React from "react";
import * as S from "./styled";

function Loader({ height }: { height?: string }): React.ReactNode {
  return (
    <S.Wrap height={height}>
      <S.LoaderSVG>
        <use xlinkHref="svg/sprite.svg#loader" />
      </S.LoaderSVG>
    </S.Wrap>
  );
}

export default Loader;
