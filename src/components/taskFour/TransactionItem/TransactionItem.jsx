import PropTypes from "prop-types";
import { TransactionItemStyled } from "components/taskFour/TransactionItem/TransactionItem.styled"


export const TransactionItem = ({ type, amount, currency, }) => {
    return (
        <TransactionItemStyled>
            <td>{ type }</td>
            <td>{ amount }</td>
            <td>{ currency }</td>
        </TransactionItemStyled>
    );
};


TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}