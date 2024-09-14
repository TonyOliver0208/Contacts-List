import {createSlice, configureStore} from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: false,
  },
  reducers: {
    fetchContactsLoading: state => {
      state.loading = true;
      state.error = false; // Reset error on loading
    },
    fetchContactsSuccess: (state, action) => {
      state.contacts = action.payload;
      state.loading = false;
      state.error = false; // Ensure no error after success
    },
    fetchContactsError: state => {
      state.loading = false;
      state.error = true;
    },
  },
});

// Export actions
export const {fetchContactsLoading, fetchContactsSuccess, fetchContactsError} =
  contactsSlice.actions;

// Configure and export the store
const store = configureStore({
  reducer: {
    contacts: contactsSlice.reducer,
  },
});

export default store;
