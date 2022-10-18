import styled from "styled-components";

import { StyledContainer } from "../styled/styledContainer";

export const StyledAuthContainer = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
`;

export const StyledAuthBlock = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 20px auto 0;
  padding: 15px 30px 30px;
  background: #ffffff;
  display: flex;
  grid-gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid black; */
  /* border-radius: 8px; */

  .auth {
    &__title {
      margin: 0 auto;
      display: block;
      /* text-align: center; */

      b {
        color: #4486bc;
      }
    }

    &__input {
      width: 100%;
      padding: 10px 0;
      display: flex;
      position: relative;
      flex-direction: column;
    }

    &__btn {
      margin-right: 0;
      margin-left: auto;
    }
    &__actions {
      width: 100%;
      margin-top: 15px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;
      align-items: center;
    }
    &__input {
      span {
        width: 100%;
      }
    }
  }

  .show-pswd {
    top: 35px;
    right: 10px;
    position: absolute;
  }
`;
