import React, {useEffect, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {fetchContacts} from '../utils/api.ts';
import ContactListItem from '../components/ContactListItem.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../store.ts';

const keyExtractor = ({phone}) => phone;

const Contacts = ({navigation}) => {
  const {contacts, loading, error} = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsLoading());
    fetchContacts()
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts));
      })
      .catch(() => {
        dispatch(fetchContactsError());
      });
  }, [dispatch]);

  // Use useMemo to sort contacts only when the contacts array changes
  const contactsSorted = useMemo(() => {
    return [...(contacts || [])].sort((a, b) => a.name.localeCompare(b.name));
  }, [contacts]);

  const renderContact = ({item}) => {
    const {name, avatar, phone} = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigation.navigate('Profile', {contact: item})}
      />
    );
  };

  return (
    <View style={styles.container}>
      {loading && <ActivityIndicator color="blue" size="large" />}
      {error && <Text>Error loading contacts...</Text>}
      {!loading && !error && (
        <FlatList
          data={contactsSorted}
          keyExtractor={keyExtractor}
          renderItem={renderContact}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Contacts;
