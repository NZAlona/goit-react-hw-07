import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { getContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
// import { selectNameFilter } from '../../redux/filtersSlice';

// const getFilteredItems = (inputName, contacts) => {
//   return inputName === ' '
//     ? contacts
//     : contacts.filter(contact => contact.name.toLowerCase().includes(inputName.toLowerCase()));
// };

export default function ContactList() {
  // const inputName = useSelector(selectNameFilter);
  const contacts = useSelector(getContacts);

  // const filteredItems = getFilteredItems(inputName, contacts);

  return (
    <>
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact value={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
