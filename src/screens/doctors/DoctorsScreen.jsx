import { useRoute } from '@react-navigation/native';

import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import Rating from '../../components/doctors/Rating';
import Favorite from '../../components/doctors/favorite/Favorite';
import DoctorsProfile from '../../components/doctors/DoctorsProfile';
import DoctorsHeading from '../../components/doctors/DoctorsHeading';

import api from '../../services/api';
import { vs } from '../../utils/responsive';

const DoctorsScreen = () => {
  const route = useRoute();

  const initialFilter = route.params?.initialFilter || 'A-Z';

  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
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

  let filteredDoctors = [...doctors];

  switch (selectedFilter) {
    case 'Rating':
      filteredDoctors.sort((a, b) => b.rating - a.rating);
      break;
    case 'Female':
      filteredDoctors = filteredDoctors.filter(item =>
        item.gender?.toLowerCase().includes('woman'),
      );
      break;
    case 'Male':
      filteredDoctors = filteredDoctors.filter(item =>
        item.gender?.toLowerCase().includes('male'),
      );
      break;
    case 'Favorite':
      filteredDoctors = filteredDoctors.filter(item => item.isFavorite);
      break;
    case 'A-Z':
    default:
      filteredDoctors.sort((a, b) => a.name.localeCompare(b.name));
  }

  const renderDoctor = ({ item }) => {
    switch (selectedFilter) {
      case 'Rating':
        return <Rating item={item} />;

      case 'Favorite':
        return <Favorite item={item} />;

      case 'Male':
        return <DoctorsProfile item={item} />;
      case 'Female':
        return <DoctorsProfile item={item} />;
      case 'A-Z':
      default:
        return <DoctorsProfile item={item} />;
    }
  };
  return (
    <View style={styles.container}>
      <DoctorsHeading
        heading={selectedFilter}
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
      />

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'small'} />
        </View>
      ) : (
        <View>
          <FlatList
            data={filteredDoctors}
            keyExtractor={item => item.id.toString()}
            renderItem={renderDoctor}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            extraData={selectedFilter}
          />
        </View>
      )}
    </View>
  );
};

export default DoctorsScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: vs(110),
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
