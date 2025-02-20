import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <>
      <ul className={css.friendList}>
        {
          /* Кількість li залежить від кількості об'єктів в масиві */
          friends.map((friend) => (
            <li key={friend.id} className={css.friendCard}>
              <FriendListItem friend={friend} />
            </li>
          ))
        }
      </ul>
    </>
  );
}
