import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm.jsx";
import ContactList from "../ContactList/ContactList.jsx";
import SearchBox from "../SearchBox/SearchBox.jsx";
import { fetchContacts } from "../../redux/contacts/operations.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
