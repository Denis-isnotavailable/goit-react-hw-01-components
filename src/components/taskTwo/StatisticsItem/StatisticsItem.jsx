import PropTypes from "prop-types";
import { StatisticsItemStyled, PercentageStatisticsStyled } from "components/taskTwo/StatisticsItem/StatisticsItem.styled";

export const StatisticsItem = ({ label, percentage }) => {
    return (<StatisticsItemStyled style={{ backgroundColor: getRandomColor(), }}>
                <span>{ label }</span>
                <PercentageStatisticsStyled>{ percentage }%</PercentageStatisticsStyled>
            </StatisticsItemStyled>);
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

StatisticsItem.propTypes = {    
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}