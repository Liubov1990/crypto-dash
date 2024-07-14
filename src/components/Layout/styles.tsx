import styled from "styled-components";
import { FlexColumnCenter } from "../../styles/Global";

export const Container = styled.div`
  display: flex;
`;

export const InnerContainer = styled.div`
  ${FlexColumnCenter};
  padding: 0 30px;
  width: 100%;
  overflow-x: hidden;
`;

export const Main = styled.main`
  ${FlexColumnCenter};
  position: relative;
  width: 100%;
`;
