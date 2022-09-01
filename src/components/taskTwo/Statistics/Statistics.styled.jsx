import styled from "styled-components";

export const StatisticsStyled = styled.section`
    width: 400px;
    margin-top: ${p => p.theme.space[5]}px;
    margin-left: auto;
    margin-right: auto;
    padding: ${p => p.theme.space[3]}px;

    background-color: ${p => p.theme.colors.background};

`;

export const TitleStatisticsStyled = styled.h2`
    margin: 0;
    padding: ${p => p.theme.space[3]}px;
    text-align: center;
    background-color: ${p => p.theme.colors.white};
`;

export const ListStatisticsStyled = styled.ul`    
    display: flex;
    list-style: none;
    margin: 0;
    padding:0;
    color: ${p => p.theme.colors.white};
`;