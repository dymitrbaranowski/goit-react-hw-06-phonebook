import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2> Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <div>Your phonebook is empty. Add first contact!</div>
      )}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
};

export default App;
