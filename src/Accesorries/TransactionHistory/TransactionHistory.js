import { Layout } from "Accesorries/Profile/ProfileStyled";

import propTypes from 'prop-types';
import { Table } from "./TransactionHistoryStyled";

export const TransactionHistory = ({ items }) => {
  return (
    <Layout>
      <Table className="transaction-history">
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};

TransactionHistory.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            type: propTypes.string.isRequired,
            amount: propTypes.string.isRequired,
            currency: propTypes.string.isRequired,
            id: propTypes.string.isRequired,
        })
    ),
};