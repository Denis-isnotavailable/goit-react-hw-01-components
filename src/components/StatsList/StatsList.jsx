import PropTypes from 'prop-types';
import { StyledStatsList, StyledQuantity } from 'components/StatsList/StatsList.styled';


export const StatsList = ({ stats: { followers, views, likes } }) => {
    return (
        <StyledStatsList>
            <li key="id-1">
                <span>Followers</span>
                <StyledQuantity>{ followers }</StyledQuantity>
            </li>
            <li key="id-2">
                <span>Views</span>
                <StyledQuantity>{ views }</StyledQuantity>
            </li>
            <li key="id-3">
                <span>Likes</span>
                <StyledQuantity>{ likes }</StyledQuantity>
            </li>
        </StyledStatsList>
    );
};

StatsList.propTypes = {
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
};