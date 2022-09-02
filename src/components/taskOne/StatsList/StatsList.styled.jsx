import styled from "styled-components";

export const StyledStatsList = styled.ul`
    display: flex;
    justify-content: center;    
    margin: ${p => p.theme.space[0]};        
    padding-left: ${p => p.theme.space[0]};

    list-style: none;
    background-color: ${p => p.theme.colors.background};

    li {
        display: flex;
        flex-direction: column;
        justify-content: center;
           
        width: calc(100% / 3);
        height: ${p => p.theme.space[5]}px;
        border-top: 1px solid;
        border-right: 1px solid;
        :last-child {
            border-right: none;
        }
    }
`;

export const StyledQuantity = styled.span`
    margin-top: ${p => p.theme.space[2]}px;
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.bold};
`;