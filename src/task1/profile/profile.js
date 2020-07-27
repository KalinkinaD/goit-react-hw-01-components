import React from "react";
import PropTypes from "prop-types";
import Stats from "../stats/stats.js";
import styles from "./profile.module.css";

function Profile({ imgUrl, name, tag, location, stats }) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <img src={imgUrl} alt="user avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <Stats stats={stats} />
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  imgUrl:
    "https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg",
};

Profile.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
export default Profile;
