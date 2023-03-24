import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.GRAY_50};

        -webkit-font-smoothing: antialiased;
    }

    h1, h2 {
        font-family: 'Roboto Slab', serif;
    }

    body, input, button, textarea {
        font-size: ${px2vw(16)};
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(1.5);
    }
`;