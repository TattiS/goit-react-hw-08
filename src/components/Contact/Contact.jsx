import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import { ListItem, ListItemText, IconButton } from "@mui/material";
import css from "./Contact.module.css";

function Contact({ contactInfo }) {
  const dispatch = useDispatch();

  return (
    <ListItem className={css.containerContact} alignItems="center">
      <div className={css.infoContainer}>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/img/sprite.svg#icon-user"></use>
          </svg>
          <ListItemText primary={contactInfo.name} />
        </div>
        <div className={css.fieldWrapper}>
          <svg width={20} height={20}>
            <use href="/img/sprite.svg#icon-phone"></use>
          </svg>
          <ListItemText primary={contactInfo.number} />
        </div>
      </div>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => dispatch(deleteContact(contactInfo.id))}
        className={css.btnDelete}
      >
        <svg width={32} height={32}>
          <use href="/img/sprite.svg#icon-bin"></use>
        </svg>
      </IconButton>
    </ListItem>
  );
}

export default Contact;

// import css from "./Contact.module.css";
// import { useDispatch } from "react-redux";
// import { deleteContact } from "../../redux/contacts/operations";

// function Contact({ contactInfo }) {
//   const dispatch = useDispatch();

//   return (
//     <li className={css.containerContact}>
//       <div className={css.infoContainer}>
//         <div className={css.fieldWrapper}>
//           <svg width={20} height={20}>
//             <use href="/img/sprite.svg#icon-user"></use>
//           </svg>
//           <p className={css.txtUsername}>{contactInfo.name}</p>
//         </div>
//         <div className={css.fieldWrapper}>
//           <svg width={20} height={20}>
//             <use href="/img/sprite.svg#icon-phone"></use>
//           </svg>
//           <p className={css.txtPhone}>{contactInfo.number}</p>
//         </div>
//       </div>
//       <button
//         className={css.btnDelete}
//         onClick={() => {
//           dispatch(deleteContact(contactInfo.id));
//         }}
//       >
//         Delete
//       </button>
//     </li>
//   );
// }

// export default Contact;
