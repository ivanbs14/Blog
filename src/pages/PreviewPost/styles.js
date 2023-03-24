import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    width: 100%;
    height: 100vh;

    margin-top: ${px2vw(32)};

    button {
        display: flex;
        justify-content: end;

        font-weight: 700;
        font-size: ${px2vw(18)};

        margin-bottom: 0;

    }

    main {
        max-width: ${px2vw(800)};

        margin: 0 auto;
        padding-bottom: 32px;
        
        > h1 {
            font-size: ${px2vw(32)};
            font-weight: 500;
            padding-top: ${px2vw(16)};
            margin-bottom: ${px2vw(16)};
        }
    
        > p {
            font-size: ${px2vw(16)};
            margin-bottom: ${px2vw(34)};
            text-align: justify;
            padding: 8px;
            border-radius: 8px;

            background: ${({theme}) => theme.COLORS.BACKGROUND_700};
            box-shadow: 5px 2px 2px ${({theme}) => theme.COLORS.BORDER_500};
        }
    
        button {
            margin-top: ${px2vw(34)};
        }
    
        li {
            list-style: none;
            margin-bottom: ${px2vw(16)};
            padding: 8px;
            border-radius: 8px;
            
            background: ${({theme}) => theme.COLORS.BACKGROUND_700};
            box-shadow: 5px 2px 2px ${({theme}) => theme.COLORS.BORDER_500};
        
            > p {
                font-family: 'Roboto Slab', serif;
                font-size: ${px2vw(16)};
                color: ${({theme}) => theme.COLORS.GRAY_50};

                margin-bottom: 8px;
            }
        }
    }

    @media (max-width: 768px) {
        main{
            max-width: ${px2vw(1100)};
        }
    }

`;