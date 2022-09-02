import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: ${p => p.theme.space[4]}px;
    margin-left: auto;
    margin-right: auto;
    padding-top: ${p => p.theme.space[3]}px;

    color: ${p => p.theme.colors.tablegrey};
    
    text-align: center;
    width: ${p => p.theme.space[7]}px;
    border: 1px solid ${p => p.theme.colors.background};
    border-radius: ${p => p.theme.radii[0]}px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;