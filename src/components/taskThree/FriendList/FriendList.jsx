import PropTypes from "prop-types";
import { FriendListItem } from 'components/taskThree/FriendListItem/FriendListItem';
import { FriendListStyled } from 'components/taskThree/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <FriendListStyled>
            {
                friends.map(({ avatar, name, isOnline, id, }) => {
                    return (
                        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
                    );
                }) 
            }
        </FriendListStyled>
    );
}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }),
    ),
};