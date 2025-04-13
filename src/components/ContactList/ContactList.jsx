import { List } from "@mui/material";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

function ContactList() {
  const selectedContacts = useSelector(selectFilteredContacts);
  return (
    <List>
      {selectedContacts.map((contact) => {
        return <Contact key={contact.id} contactInfo={contact} />;
      })}
    </List>
  );
}

export default ContactList;

// import css from "./ContactList.module.css";
// import Contact from "../Contact/Contact";
// import { useSelector } from "react-redux";
// import { selectFilteredContacts } from "../../redux/contacts/selectors";

// function ContactList() {
//   const selectedContacts = useSelector(selectFilteredContacts);
//   return (
//     <ul className={css.contactList}>
//       {selectedContacts.map((contact) => {
//         return <Contact key={contact.id} contactInfo={contact} />;
//       })}
//     </ul>
//   );
// }

// export default ContactList;
