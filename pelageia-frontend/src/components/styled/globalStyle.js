import { createGlobalStyle } from "styled-components";

const mainFont = '"Segoe UI", "Segoe UI Web (West European)", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif';
const mainFontSize = "16px";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    color: #323130;
    font-family: ${mainFont};
    font-size: ${mainFontSize};
    letter-spacing: 0.2px;
    line-height: 22px;
    background: rgb(242, 242, 242);
  }

  .table-action {
    width: 40px;
  }
`;
