import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-weight:500;
    }
    html, body, #root{
        height: 100%; 
        background-color: var(--primary);
    }
    *, button, input{
        border: 0;
        outline: 0;
    }

    :root{
         --primary: #141414; 
         --secondary: #252525;
         --placeholder-and-separator: #fdc0cd;
         --title-and-input: #d2000b;
         --favorites-and-categories: #3a0001;
         --red: #ff0000;
         --selected-category: #ed000c;
         --category: #c4c4c4;
         --black: #000000;
         --button: #868686;
         --white: #ffffff;
    }

`