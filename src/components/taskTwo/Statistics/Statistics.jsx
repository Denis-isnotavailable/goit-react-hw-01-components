import PropTypes from "prop-types";
import { StatisticsStyled, TitleStatisticsStyled, ListStatisticsStyled, } from "components/taskTwo/Statistics/Statistics.styled";
import { StatisticsItem } from "components/taskTwo/StatisticsItem/StatisticsItem"


export const Statistics = ({ title, stats, }) => {
    return (
        <StatisticsStyled>
            { title && <TitleStatisticsStyled>{ title }</TitleStatisticsStyled> }         
            <ListStatisticsStyled>

                {
                    stats.map(({ id, label, percentage }) => {                        
                        return <StatisticsItem key = { id } label = { label } percentage = { percentage } />;
                    })
                }
                
            </ListStatisticsStyled>
        </StatisticsStyled>
    );  
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}

