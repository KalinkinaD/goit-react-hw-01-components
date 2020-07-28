import React from "react";
import PropTypes from "prop-types";

const Transaction = ({ datas }) => {
  return (
    <>
      {datas.map((data) => (
        <tr key={data.id}>
          <td>{data.type}</td>
          <td>{data.amount}</td>
          <td>{data.currency}</td>
        </tr>
      ))}
    </>
  );
};
export default Transaction;

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
