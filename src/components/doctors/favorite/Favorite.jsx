import React, { memo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import FavoriteTabs from './FavoriteTab';
import ServicesList from './ServiceList';
import DoctorCard from './DoctorCard';

const Favorite = ({ item }) => {
  const [selectedTab, setSelectedTab] = useState('doctors');

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

export default memo(Favorite);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
