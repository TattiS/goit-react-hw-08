import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../../../goit-react-hw-07/src/components/ContactForm/ContactForm";
import SearchBox from "../../../../goit-react-hw-07/src/components/SearchBox/SearchBox";

export default function ContactsPage() {
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <title>Your contacts</title>
      <div>{isLoading && "Request in progress..."}</div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
}
