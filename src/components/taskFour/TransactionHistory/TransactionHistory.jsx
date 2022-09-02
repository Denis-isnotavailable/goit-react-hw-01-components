import PropTypes from "prop-types";
import { TransactionHistoryStyled } from "components/taskFour/TransactionHistory/TransactionHistory.styled";
import { TransactionItem } from "components/taskFour/TransactionItem/TransactionItem";


export const TransactionHistory = ({ items }) => {
    return (
        <TransactionHistoryStyled>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(({ id, type, amount, currency, }) => <TransactionItem key={id} type={ type } amount={ amount } currency={ currency } />)
                }
            </tbody>            
        </TransactionHistoryStyled>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
}