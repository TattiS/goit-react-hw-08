import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log out
      </button>
    </div>
  );
}

export default UserMenu;
