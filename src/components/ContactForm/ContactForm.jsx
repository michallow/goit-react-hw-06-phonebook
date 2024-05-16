import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export const ContactForm = ({ handleSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit({ name, number }); // Destructuring objects
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>Name</label>
      <input
        className={css.formInput}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash, and spaces."
        required
        placeholder="Enter name"
        value={name}
        onChange={handleNameChange}
      />
      <label className={css.formLabel}>Number</label>
      <input
        className={css.formInput}
        type="tel"
        name="number"
        pattern="[+]?[\d\s-()]{5,}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses, and start with +"
        required
        placeholder="Enter phone number"
        value={number}
        onChange={handleNumberChange}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
