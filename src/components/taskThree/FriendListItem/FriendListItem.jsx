import PropTypes from "prop-types";
import { FriendListItemStyled } from 'components/taskThree/FriendListItem/FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, }) => {
    return (
        <FriendListItemStyled>
            {isOnline ? <span style={{ backgroundColor: '#00ff00' }}></span> : <span style={{ backgroundColor: '#ff0000' }}></span>}
            <img src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </FriendListItemStyled>
    );
};


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};