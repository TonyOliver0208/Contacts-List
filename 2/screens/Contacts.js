import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {fetchContacts} from '../../utils/api';
import ContactListItem from '../../components/ContactListItem';

//redux
import {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
} from '../../redux/store';
import {useDispatch, useSelector} from 'react-redux';

const keyExtractor = ({phone}) => phone;

const Contacts = ({navigation}) => {
  // const [contacts, setContacts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   fetchContacts()
  //     .then(contacts => {
  //       setContacts(contacts);
  //       setLoading(false);
  //       setError(false);
  //     })
  //     .catch(e => {
  //       console.log(e);
  //       setLoading(false);
  //       setError(true);
  //     });
  // }, []);

  const {contacts, loading, error} = useSelector(state => state); //.contacts);
  const dispatch = useDispatch();

  // Load data
  useEffect(() => {
    dispatch(fetchContactsLoading()); // Set loading state
    fetchContacts() // Fetch the contacts (ensure fetchContacts is defined properly)
      .then(contacts => {
        dispatch(fetchContactsSuccess(contacts)); // Dispatch success action
      })
      .catch(e => {
        dispatch(fetchContactsError()); // Dispatch error action
      });
  }, []); //[dispatch]);

  const contactsSorted = contacts.sort((a, b) => a.name.localeCompare(b.name));

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
