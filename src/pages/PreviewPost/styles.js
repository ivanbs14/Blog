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
        
        button {
            margin-top: ${px2vw(60)};
        }
        
        > h1 {
            font-size: ${px2vw(32)};
            font-weight: 500;
            padding-top: ${px2vw(16)};
            margin: 16px 0 16px 0;
        }

        .pfather {
            border: none;
            box-shadow: none;
        }
        
    
        > p {
            font-size: ${px2vw(16)};
            margin-bottom: ${px2vw(34)};
            text-align: justify;
            padding: 8px;
            border-radius: 8px;

            background: ${({theme}) => theme.COLORS.BACKGROUND_700};
            box-shadow: 2px 1px 1px ${({theme}) => theme.COLORS.BORDER_500};
        }
    
        li {
            list-style: none;
            margin-bottom: ${px2vw(16)};
            padding: 8px;
            border-radius: 8px;
            
            background: ${({theme}) => theme.COLORS.BACKGROUND_700};
            box-shadow: 2px 1px 1px ${({theme}) => theme.COLORS.BORDER_500};
        
            > p {
                font-family: 'Roboto Slab', serif;
                font-size: ${px2vw(16)};
                color: ${({theme}) => theme.COLORS.GRAY_50};

                margin-bottom: 8px;

            }
        }
    }

    @media (max-width: 768px) {

        .pfather {
            font-size: ${px2vw(32)};            
        }

        main{

            h1 {
                font-size: ${px2vw(38)};

                margin-bottom: 16px;
            }

            button{
                font-size: ${px2vw(32)};
            }

            max-width: ${px2vw(1100)};
            height: 100px;

            li {
                font-size: ${px2vw(32)};

                >p {
                    font-size: ${px2vw(36)};
                }
            }
        }
    }

`;