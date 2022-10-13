import styled from "styled-components";
import { StyledContainer } from "../styled/styledContainer";

export const StyledUsersContainer = styled(StyledContainer)`
  .user-card {
    align-items: center;
    grid-gap: 15px;
  }
  .user-providers-table {
    max-width: 800px;
    width: 100%;
  }
  .table-action {
    width: 40px;
  }
  .card-divider {
    margin: 20px 0;
  }
`;
