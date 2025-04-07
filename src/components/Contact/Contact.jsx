import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

function Contact({ contactInfo }) {
  const dispatch = useDispatch();

  return (
    <li className={css.containerContact}>
      <div className={css.infoContainer}>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/img/sprite.svg#icon-user"></use>
          </svg>
          <p className={css.txtUsername}>{contactInfo.name}</p>
        </div>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/img/sprite.svg#icon-phone"></use>
          </svg>
          <p className={css.txtPhone}>{contactInfo.number}</p>
        </div>
      </div>
      <button
        className={css.btnDelete}
        onClick={() => {
          dispatch(deleteContact(contactInfo.id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
