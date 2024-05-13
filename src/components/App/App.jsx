import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { addContact, deleteContact, setFilter, selectFilteredContacts } from '../../components/contactsSlice';
import s from '../../components/App/App.module.css';

export const App = () => {
  const contacts = useSelector(selectFilteredContacts);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      dispatch(addContact(savedContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (value) => {
    dispatch(setFilter(value));
  };

  return (
    <section className={s.content}>
      <div className={s.content__container}>
        <ContactForm addContact={handleAddContact} />
        <ContactList contacts={contacts} deleteContact={handleDeleteContact}>
          <Filter filter={filter} addFilter={(e) => handleFilterChange(e.currentTarget.value)} />
        </ContactList>
      </div>
    </section>
  );
};
