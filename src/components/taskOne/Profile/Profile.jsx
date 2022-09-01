import PropTypes from "prop-types";
import { Description } from 'components/taskOne/Description/Description';
import { StatsList } from "components/taskOne/StatsList/StatsList";
import { Wrapper } from "components/taskOne/Profile/Profile.styled"


export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Wrapper>
            <Description
                username={username}
                tag={tag}
                location={location}
                avatar={avatar}
            />
            <StatsList stats={stats} />
        </Wrapper>
    
  );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};