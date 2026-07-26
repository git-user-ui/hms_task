import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import DoctorsHeading from './DoctorsHeading';
import DoctorsProfile from './DoctorsProfile';
import Rating from './Rating';

import api from '../../services/api';
import DoctorCard from './favorite/DoctorCard';
import { vs } from '../../utils/responsive';

const DoctorsComponent = () => {
  const [selectedFilter, setSelectedFilter] = useState('A-Z');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        const { data } = await api.get('/');

        setDoctors(data);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = useMemo(() => {
    let data = [...doctors];

    switch (selectedFilter) {
      case 'Rating':
        return data.sort((a, b) => b.rating - a.rating);

      case 'Female':
        return data.filter(item =>
          item.gender?.toLowerCase().includes('woman'),
        );

      case 'Male':
        return data.filter(item => item.gender?.toLowerCase().includes('man'));

      case 'Favorite':
        return data.filter(item => item.isFavorite);

      case 'A-Z':
      default:
        return data.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [doctors, selectedFilter]);

  const renderDoctor = useCallback(
    ({ item }) => {
      switch (selectedFilter) {
        case 'Rating':
          return <Rating item={item} />;

        case 'Favorite':
          return <DoctorCard item={item} />;

        case 'Male':
        case 'Female':
        case 'A-Z':
        default:
          return <DoctorsProfile item={item} />;
      }
    },
    [selectedFilter],
  );

  const keyExtractor = useCallback(item => item.id.toString(), []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <DoctorsHeading
        heading="Doctors"
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      <FlatList
        data={filteredDoctors}
        keyExtractor={keyExtractor}
        renderItem={renderDoctor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        extraData={selectedFilter}
      />
    </View>
  );
};

export default DoctorsComponent;

const styles = StyleSheet.create({
  container: {
    marginBottom: vs(150),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listContainer: {
    paddingTop: 12,
    paddingBottom: 100,
  },
});
