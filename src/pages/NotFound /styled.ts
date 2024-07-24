import styled from "styled-components";
import { RelativeContainer } from "../../styles/Common";

export const Main = styled.main`
  ${RelativeContainer}
  height: 100vh;
`;

export const ErrorSection = styled.section`
  ${RelativeContainer};
  justify-content: center;
  height: 100%;
  /* color: ${({ theme }) => theme.sharedColors.searchText}; */

  padding: 10px;
  overflow: hidden;

  p {
    font-size: 2.5rem;
    margin-bottom: 40px;
  }
`;

export const ErrNumber = styled.span`
  font-size: 6.25rem;
`;

export const Image = styled.img`
  position: absolute;
  top: 21%;
  left: 51%;
  max-width: 280px;
  max-height: 260px;
  z-index: -1;
`;
