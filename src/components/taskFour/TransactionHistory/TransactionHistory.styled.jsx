import styled from "styled-components";


export const TransactionHistoryStyled = styled.table`
    width: ${p => p.theme.space[8]}px;
    margin-top: ${p => p.theme.space[5]}px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: ${p => p.theme.space[5]}px;
    
	border-spacing: 0;    
    border-radius: ${p => p.theme.radii[0]}px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    text-align: center;
    
    thead {
        height: ${p => p.theme.space[4]}px;
        text-transform: uppercase;
        background-color: ${p => p.theme.colors.primary};
        color: ${p => p.theme.colors.white};
    }

    tr:nth-child(even) {
        background-color: ${p => p.theme.colors.background};
    }

    td, th {
        padding: 0;
        border-right: 1px solid #cccccc;
        :last-child {
            border-right: none;
        }
    }    
`;