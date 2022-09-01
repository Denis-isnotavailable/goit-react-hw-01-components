import styled from "styled-components";

export const StatisticsItemStyled = styled.li`
    display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: ${p => p.theme.space[2]}px;
        height: ${p => p.theme.space[5]}px;
        width: calc(100% / 5); 
`;

export const PercentageStatisticsStyled = styled.span`
    margin-top: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;    
`;