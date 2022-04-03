import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family:  'Noto Sans KR', sans-serif !important;
    }

    ${reset}
`;

export default GlobalStyle;
