import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

const contactsAdapter = createEntityAdapter();

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsAdapter.getInitialState({
    filter: '',
  }),
  reducers: {
    addContact: contactsAdapter.addOne,
    deleteContact: contactsAdapter.removeOne,
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, setFilter } = contactsSlice.actions;

export const selectFilteredContacts = (state) => {
  const filter = state.contacts.filter.toLowerCase();
  const allContacts = contactsAdapter.getSelectors().selectAll(state);
  return allContacts.filter(contact => contact.name.toLowerCase().includes(filter));
};

export default contactsSlice.reducer;
