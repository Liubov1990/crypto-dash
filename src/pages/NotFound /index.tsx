import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { BtnWithSVG } from "../../styles/Common";
import * as S from "./styled";

function Error(): ReactNode {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate("/");
  };

  return (
    <S.Main>
      <S.ErrorSection>
        <S.ErrNumber>404</S.ErrNumber>
        <p>Page not found!</p>
        <S.Image
          src="images/404.webp"
          alt="Broken bitcoin"
          width="280"
          height="260"
        />
        <BtnWithSVG type="button" onClick={handleReturnHome}>
          <svg>
            <use xlinkHref="svg/sprite.svg#home" />
          </svg>
          <span>Home</span>
        </BtnWithSVG>
      </S.ErrorSection>
    </S.Main>
  );
}

export default Error;
