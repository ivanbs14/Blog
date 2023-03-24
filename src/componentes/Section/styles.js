import styled from 'styled-components';
import px2vw from "../../utils/px2vw";

export const Conteiner = styled.section`
    margin: ${px2vw(28)} 0;

    > h2 {
        border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_100};

        padding-bottom: ${px2vw(16)};
        margin-bottom: ${px2vw(24)};

        color: ${({theme}) => theme.COLORS.GRAY_60};
        font-weight: 400;
        font-size: ${px2vw(20)};
    }
`;