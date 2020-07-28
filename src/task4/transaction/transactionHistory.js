import React from "react";
import PropTypes from "prop-types";
import Transaction from "../transactionItem/transactionItem";
import styles from "./transaction.module.css";

const TransactionHistory = ({ datas }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <Transaction datas={datas} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;

Transaction.propTypes = {
  datas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
