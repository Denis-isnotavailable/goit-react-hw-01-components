import styled from "styled-components";

export const FriendListItemStyled = styled.li`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[3]}px;
    gap: ${p => p.theme.space[3]}px;
    width: ${p => p.theme.space[7]}px;
    border: 1px solid ${p => p.theme.colors.background};
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);

    span {
        display: block;
        width: ${p => p.theme.space[4]}px;
        height: ${p => p.theme.space[4]}px;
        border-radius: ${p => p.theme.radii[1]}%;
    }

    p {
        font-size: ${p => p.theme.fontSizes[4]}px;
        font-weight: ${p => p.theme.fontWeights.bold};
    }
`;