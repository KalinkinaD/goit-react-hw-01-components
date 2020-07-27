import React from "react";
import PropTypes from "prop-types";
import styles from "./friendList.module.css";
import FriendsListItem from "./friendslistItem";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      <FriendsListItem friends={friends} />
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
