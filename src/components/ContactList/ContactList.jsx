import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {
  selectContactsError,
  selectContactsLoading,
  selectVisibleContacts,
} from "../../redux/selectors";
import { useSelector } from "react-redux";
import Loader from "../Loader/Loader";

const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  return (
    <>
      {loading && <Loader />}
      {error && <p>Oops, something went wrong, please reload the page!</p>}
      <ul className={css.list}>
        {filteredContacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
