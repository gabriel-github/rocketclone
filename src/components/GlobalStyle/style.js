import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`  
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: #121214;
        -webkit-font-smoothing: antialiased;
    }

    button {
        background-color: #8257e6;
        border: none;
        outline: none;
        cursor: pointer;
    }
`;

export default GlobalStyles;