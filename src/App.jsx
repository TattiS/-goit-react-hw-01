import css from "../src/App.module.css";
import userData from "./userData.json";
import list from "../src/friends.json";
import transactions from "../src/transactions.json";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <div className={css.wrapper}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={list} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
