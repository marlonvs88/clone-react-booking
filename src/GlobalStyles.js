import { createGlobalStyle } from 'styled-components';
import '@fontsource/roboto'; 

const GlobalStyles = createGlobalStyle`
  /* Reset de estilos para elementos HTML */
  body, h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  dl, dd, ol, ul, figure, hr {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif; 
  }


  /* Outros reset de estilos... */
`;

export default GlobalStyles;
