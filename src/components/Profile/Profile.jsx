/* eslint-disable react/prop-types */
import css from "./Profile.module.css";

export default function Profile(props) {
  return (
    <div className={css.profileCard}>
      <div className={css.profileAvatar}>
        <img src={props.image} alt="User avatar" />
        <p className={css.profileUsername}>{props.name}</p>
        <p className={css.profileTag}>@{props.tag}</p>
        <p className={css.profileLocation}>{props.location}</p>
      </div>

      <ul className={css.profileStats}>
        <li className={css.stat}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.stat}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
