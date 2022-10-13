import styled from "styled-components";

export const StyledTitleWrapper = styled.div`
  height: 32px;
  width: fit-content;
  margin: 0 auto;
  padding: 5px 0 15px;
  font-size: 32px;
  font-weight: 600;
  color: #323130;
  line-height: 32px;
  display: flex;
  align-items: center;
  grid-gap: 3px;
  
  span {
    /* text-shadow: 0 3px 3px rgba(50 49 48 / 20%); */
  }

  &:before {
    content: "";
    width: 6px;
    height: 30px;
    background: #0f6cbd;
    /* box-shadow: 0 3px 3px 1px rgba(15, 108, 189, 0.2); */
  }
`;
