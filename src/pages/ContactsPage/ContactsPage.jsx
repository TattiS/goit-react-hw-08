import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectLoading } from "../../redux/contacts/selectors";
import { ContactList } from "../../components/ContactList/ContactList";

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
      <ContactList />
    </>
  );
}
