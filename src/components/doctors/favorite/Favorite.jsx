import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FavoriteTabs from './FavoriteTab';
import ServicesList from './ServiceList';
import DoctorCard from './DoctorCard';

const Favorite = ({ item }) => {
  const [selectedTab, setSelectedTab] = useState('doctors');

  console.log('name property', item);

  return (
    <View style={styles.container}>
      <FavoriteTabs selectedTab={selectedTab} onChange={setSelectedTab} />

      {selectedTab === 'doctors' ? (
        <DoctorCard item={item} />
      ) : (
        <ServicesList />
      )}
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
