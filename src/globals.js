import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    
    background: #d1c8b0;
    font-family: Roboto,  Sans-Serif;
     overflow-x:hidden;
  }
  *,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
 
`;

export default GlobalStyle;
