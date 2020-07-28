import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
import FriendsItem from "./friendsItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendsItem friends={friends} />
    </ul>
  );
};

export default FriendsList;

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
