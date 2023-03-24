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
            width: 250px;

        }

        .avatar {
            width: 80px;
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
                height: 180px;

                font-size: ${px2vw(24)};
    
                margin-bottom: ${px2vw(24)};
                padding: 24px;

                border-radius: 4px;
                box-shadow: 2px 1px 1px ${({theme}) => theme.COLORS.BORDER_500};
    
                background: ${({theme}) => theme.COLORS.BACKGROUND_700};

                position: relative;
               
                button {
                    height: 110px;

                    margin-left: -24px;
                    padding: 0 16px;

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
                    padding: 0 16px;

                    font-size: 16px;

                    color: ${({theme}) => theme.COLORS.GRAY_60};
                }
            }

        }
        
    }
`;