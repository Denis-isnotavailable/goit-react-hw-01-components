import styled from "styled-components";

export const FriendListStyled = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin-top: ${p => p.theme.space[5]}px;
    
    margin-bottom: 0;
    gap: 15px;

    list-style: none;
`;