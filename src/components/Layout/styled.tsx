import styled from "styled-components";
import { FlexColumnCenter, RelativeContainer } from "../../styles/Common";

export const Container = styled.div`
  display: flex;
`;

export const InnerContainer = styled.div`
  ${FlexColumnCenter};
  width: 100%;
  overflow: auto;
`;

export const Main = styled.main`
  ${RelativeContainer};
  min-height: calc(100vh - 130px);
  margin-bottom: 30px;
`;
