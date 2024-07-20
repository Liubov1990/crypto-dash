import styled from "styled-components";
import { FlexColumnCenter, RelativeContainer } from "../../styles/Common";

export const Container = styled.div`
  display: flex;
`;

export const InnerContainer = styled.div`
  ${FlexColumnCenter};
  padding: 0 30px;
  width: 100%;
  overflow-x: hidden;
`;

export const Main = styled.div`
  ${RelativeContainer};
  height: calc(100vh - 100px);
`;
