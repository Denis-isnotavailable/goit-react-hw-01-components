import PropTypes from "prop-types";
import { StyledDescription, StyledName } from "components/Description/Description.styled";


export const Description = ({ username, tag, location, avatar, }) => {
    return (
        <StyledDescription>
            <img src={avatar} alt="User avatar" />
            <StyledName>{username}</StyledName>
            <p>{tag}</p>
            <p>{location}</p>
        </StyledDescription>
    );
};

Description.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
};