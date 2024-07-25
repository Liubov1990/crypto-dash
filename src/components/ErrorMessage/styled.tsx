import styled from "styled-components";
import { Wrap } from "../../styles/Common";

export const ErrorWrap = styled.div`
  ${Wrap};
  color: ${({ theme }) => theme.color.textMain};
  height: 100%;
`;
