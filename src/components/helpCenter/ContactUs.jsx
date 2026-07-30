import React from 'react';
import { FlatList } from 'react-native';

import ContactItem from './ContactItem';
import { CONTACT_DATA } from '../../utils/contactData';

const ContactUs = () => {
  const handlePress = item => {};

  return (
    <FlatList
      data={CONTACT_DATA}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <ContactItem item={item} onPress={handlePress} />
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingTop: 25,
        paddingBottom: 40,
      }}
    />
  );
};

export default ContactUs;
