import React from "react";
import * as S from "./styled";

function Loader(): React.ReactNode {
  return (
    <S.Wrap>
      <S.LoaderSVG>
        <use xlinkHref="svg/sprite.svg#loader" />
      </S.LoaderSVG>
    </S.Wrap>
  );
}

export default Loader;
