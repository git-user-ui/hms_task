import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { doctorsData } from '../../../utils/doctorsdata';
import DoctorCard from './DoctorCard';

const DoctorsList = () => {
  return (
    <FlatList
      data={doctorsData}
      keyExtractor={item => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 40,
      }}
      renderItem={({ item }) => (
        <ScrollView>
          <DoctorCard item={item} />
        </ScrollView>
      )}
    />
  );
};

export default DoctorsList;
