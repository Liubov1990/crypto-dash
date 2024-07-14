import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
  width: 100%;

  span {
    font-size: 0.875rem;
    margin-right: 5px;
  }

  svg {
    width: 20px;
    height: 18px;
    vertical-align: middle;
  }
`;

export const HeaderBar = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;
