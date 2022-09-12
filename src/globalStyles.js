import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0px;
        margin: 0px;
    }

    h1 {
        font-family: "Big Shoulders Display", cursive;
        font-weight: 700;
        letter-spacing: 1px;
        font-size: 3.5em;
        color: ${(props) =>
          props.h1Color === "white" ? "#ffffff" : "#252D80"};
        @media (max-width: 960px) {
            font-size: 2.5em;
        }
    }

    h2 {
        font-family: "Big Shoulders Display", cursive;
        font-weight: 800;
        letter-spacing: 1px;
        font-size: 2.5em;
        color: #252D80;
        text-transform: uppercase;
    }

    h3 {
        font-family: "Big Shoulders Display", cursive;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1.8em;
        color: #252D80;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    h4 {
        font-family: "Big Shoulders Display", cursive;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 1.8em;
        color: #252D80;
        text-transform: uppercase;
        margin-bottom: 5px;
    }

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1.1em;
        line-height: 1.6em;
        color: ${(props) => (props.pColor === "white" ? "#ffffff" : "#252D80")};
    }

    a {
        text-decoration: none;
       }

    section {
        width: 80%;
        max-width: 1250px;
        margin: auto;
       }

    .my-masonry-grid {
        display: -webkit-box; /* Not needed if autoprefixing */
        display: -ms-flexbox; /* Not needed if autoprefixing */
        display: flex;
        margin-left: -30px; /* gutter size offset */
        width: auto;
    }

    .my-masonry-grid_column {
        padding-left: 30px; /* gutter size */
        padding-bottom: 30px; /* gutter size */
        background-clip: padding-box;
    }

`;

export default GlobalStyle;
