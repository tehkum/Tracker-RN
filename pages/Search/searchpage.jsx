import {useEffect, useMemo, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import Contacts from 'react-native-contacts';
import mergeSort from './sort';
import {useSelector, useDispatch} from 'react-redux';
import {fetchContacts} from '../../context/features/contactSlice';

export default function Searchpage() {
  const [search, setSearch] = useState('');
  const contact = useSelector(state => state.contact);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact.status === 'idle') {
      dispatch(fetchContacts());
    }
  }, [dispatch, contact.status]);

  const sortedContacts = useMemo(() => {
    return mergeSort(contact.contacts);
    // return contact.contacts;
  }, [contact.contacts]);

  const lowerCaseSearch = search.toLowerCase();

  const searchedData = useMemo(() => {
    return search
      ? sortedContacts?.filter(contacts => {
          return `${contacts?.givenName} ${contacts?.familyName}`
            ?.toLowerCase()
            .includes(lowerCaseSearch);
        })
      : sortedContacts;
  }, [sortedContacts, lowerCaseSearch]);

  return (
    <View>
      <TextInput
        placeholder="Search"
        style={style.messageInput}
        onChangeText={setSearch}
        value={search}
      />
      {searchedData?.map((contacts, index) => (
        <View key={index} style={style.contactBox}>
          {contacts?.hasThumbnail ? (
            <Image
              source={{uri: contacts.thumbnailPath}}
              style={style.profilePic}
            />
          ) : (
            <Image
              source={{uri: 'https://picsum.photos/200'}}
              style={style.profilePic}
            />
          )}
          <View>
            <Text style={style.personName}>
              {contacts.givenName} {contacts.familyName}
            </Text>
            <Text>{contacts?.phoneNumbers[0]?.number}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const style = StyleSheet.create({
  messageInput: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#363738',
    color: 'white',
  },
  personName: {
    color: 'white',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  contactBox: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    gap: 15,
    alignItems: 'center',
    backgroundColor: '#363738',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
