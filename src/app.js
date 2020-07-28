import React from "react";
// Task-1-----------------------
import Profile from "./task1/profile/profile";
import user from "./task1/user.json";
// Task-2--------------------------
import Statistics from "./task2/statistics/statistics";
import StatsRender from "./task2/stats/stats";
import statisticalData from "./task2/statistical-data.json";
// Task-3--------------------------
import friends from "./task3/friends.json";
import FriendsList from "./task3/friendsList";
// Task-4--------------------------
import TransactionHistory from "./task4/transaction/transactionHistory";
import transactions from "./task4/transactions.json";

export default function App() {
  return (
    <>
      <h2>Task-01</h2>
      <Profile {...user} />
      <h2>Task-02</h2>
      <Statistics title="Upload stats">
        <StatsRender stats={statisticalData} />
      </Statistics>
      <h2>Task-03</h2>
      <FriendsList friends={friends} />
      <h2>Task-04</h2>
      <TransactionHistory datas={transactions} />
    </>
  );
}
