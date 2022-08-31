import styled from "styled-components";
import PropTypes from "prop-types";
import { Description } from 'components/Description/Description';
import { StatsList } from "components/StatsList/StatsList";

const Wrapper = styled.div`
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;

    color: rgb(128, 128, 128);
    
    text-align: center;
    width: 250px;
    border: 1px solid #e0e0e0;
    border-radius: 5px;
    box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
`;

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