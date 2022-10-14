import styled from "styled-components";
import { StyledContainer } from "../styled/styledContainer";
import { Button, AccordionItem } from "@fluentui/react-components";

export const StyledUsersContainer = styled(StyledContainer)`
  .user-card {
    align-items: center;
    grid-gap: 15px;
  }
  .user-providers-table {
    background: transparent;
  }
  .card-divider {
    margin: 20px 0;
  }
`;

export const StyledUserCard = styled.div`
  max-width: 1184px;
  width: 100%;
  margin: 30px auto 0;
  display: flex;
  grid-gap: 25px;
  flex-flow: column nowrap;

  .user {
    &__prop {
      display: flex;
      flex-direction: column;
    }
    &__info {
      display: flex;
      grid-gap: 16px;
    }
    &__creds {
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      justify-content: space-evenly;
    }
    &__email {
      display: flex;
      grid-gap: 5px;
    }
    &__actions {
      display: flex;
    }
    &__action-btn {
      width: 300px;
      display: grid;
      align-items: center;
      grid-template-rows: 22px 16px;
      grid-template-columns: 44px 1fr;
    }
  }
`;

export const StyledUserPreview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUserActionButton = styled(Button)`
  width: 32px;
  height: 32px;
  grid-row-start: 1;
  grid-row-end: 3;
  background: ${({ error }) => (error ? "#ffd3d3" : "#cfe5f6")};
  color: ${({ error }) => (error ? "#E81123" : "#006fc9")};
  &:hover {
    background: ${({ error }) =>
      error ? "#E81123!important" : "#006fc9!important"};
    color: #ffffff !important;
  }
`;

export const StyledUserProp = styled(AccordionItem)`
  min-height: 48px;
  margin-top: 8px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 8px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 13%) 0px 1.6px 3.6px 0px,
    rgb(0 0 0 / 11%) 0px 0.3px 0.9px 0px;
  &:hover {
    background-color: rgb(232, 232, 232);
  }
`;
