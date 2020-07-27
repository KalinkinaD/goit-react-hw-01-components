import React from "react";
import PropTypes from "prop-types";
import styles from "../profile/profile.module.css";

const Stats = ({ stats }) => {
  return (
    <>
      {Object.entries(stats).map((stat) => (
        <li key={stat[0]} className={styles.statsItem}>
          <span className={styles.label}>{stat[0]}</span>
          <span className={styles.quantity}>{stat[1]}</span>
        </li>
      ))}
    </>
  );
};
export default Stats;

Stats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
