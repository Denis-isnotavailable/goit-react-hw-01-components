import styled from "styled-components";


export const StyledDescription = styled.div`
    img {
        width: ${p => p.theme.space[6]}px;        
        border-radius: ${p => p.theme.radii[1]}%;
    }   
`;

export const StyledName = styled.p`
    color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.heading};
`;