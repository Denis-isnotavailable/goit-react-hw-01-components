import styled from "styled-components";

export const TransactionItemStyled = styled.tr`
    height: ${p => p.theme.space[4]}px;
    color: ${p => p.theme.colors.tablegrey};

    td:first-child::first-letter {        
        text-transform: uppercase;
    }   
`;