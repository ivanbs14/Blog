import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.button`
    width: 100%;
    background: none;
    color: ${({theme}) => theme.COLORS.GRAY_40};

    border: none;
    font-size: ${px2vw(16)};
    margin: 0 0 ${px2vw(10)};
`;