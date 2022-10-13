import styled from "styled-components";

export const StyledList = styled.div`
  max-width: 400px;
`;

export const StyledListRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const StyledListCell = styled.div`
  padding: 10px 5px;
  font-weight: 600;
  &:nth-child(2n) {
    font-weight: 400;
  }
`;
