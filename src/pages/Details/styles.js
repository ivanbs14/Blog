import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.div`
    padding: 0 ${px2vw(42)};
    padding-top: ${px2vw(64)};

    > h1{
        display: flex;
        justify-content: center;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .logo {
            width: 200px;

        }

        .avatar {
            width: 100px;
            border-radius: 50%;
        }
    }
`;

export const Content = styled.div`
    overflow-y: auto;
    text-align: left;
    
    list-style: none;

    section {

        h2 {
            display: flex;
            justify-content: center;
        }
        
        .post {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            padding: 16px;

            > li {
                width: 260px;
                height: 300px;

                font-size: ${px2vw(24)};
    
                margin-bottom: ${px2vw(24)};
                padding: 24px;

                border: 0.5px solid ${({theme}) => theme.COLORS.BORDER_500};
                border-radius: 8px;
                box-shadow: 5px 2px 2px ${({theme}) => theme.COLORS.BORDER_500};
    
                background: ${({theme}) => theme.COLORS.BACKGROUND_700};

                position: relative;
                img {
                    width: 100%;
                    height: 110px;
                }
               
                button {
                    height: 220px;

                    margin-top: -130px;
                    margin-left: -24px;
                    padding: 140px 24px 0;

                    display: flex;
                    text-align: start;
                    justify-content: baseline;

                    font-size: 18px;

                    position: absolute;
                    z-index: 2;
                }

                .btn {
                    height: 25px;
                    display: flex;
                    text-align: start;
                    justify-content: end;

                    margin-top: 110px;
                    padding: 0 30px;

                    font-size: 16px;

                    color: ${({theme}) => theme.COLORS.GRAY_60};
                }
            }

        }
        
    }
`;