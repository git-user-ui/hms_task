import { useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Rating from '../../components/doctors/Rating';
import FavoriteTabs from '../../components/doctors/favorite/FavoriteTab';
import DoctorCard from '../../components/doctors/favorite/DoctorCard';
import ServicesList from '../../components/doctors/favorite/ServiceList';
import DoctorsProfile from '../../components/doctors/DoctorsProfile';
import DoctorsHeading from '../../components/doctors/DoctorsHeading';

import { vs, sc } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { DOCTOR_FILTERS, GENDER } from '../../constants/filters';
import { EMPTY_STATE_MESSAGES } from '../../constants/messages';
import {
  fetchDoctors,
  selectDoctors,
  selectDoctorsError,
  selectDoctorsLoading,
} from '../../redux/slices/doctorsSlice';
import { Screen_SIZES_VerticalScale } from '../../constants/screen';

const DoctorsScreen = () => {
  const route = useRoute();
  const dispatch = useDispatch();

  const initialFilter = route.params?.initialFilter || DOCTOR_FILTERS.AZ;

  const [selectedFilter, setSelectedFilter] = useState(initialFilter);
  const [favoriteTab, setFavoriteTab] = useState('doctors');

  const doctors = useSelector(selectDoctors);
  const loading = useSelector(selectDoctorsLoading);
  const error = useSelector(selectDoctorsError);

  useEffect(() => {
    if (doctors.length === 0) {
      dispatch(fetchDoctors());
    }
  }, [dispatch, doctors.length]);

  const filteredDoctors = useMemo(() => {
    const list = [...doctors];

    switch (selectedFilter) {
      case DOCTOR_FILTERS.RATING:
        return list.sort((a, b) => b.rating - a.rating);

      case DOCTOR_FILTERS.FEMALE:
        return list.filter(
          item => item.gender?.toLowerCase() === GENDER.FEMALE,
        );

      case DOCTOR_FILTERS.MALE:
        return list.filter(item => item.gender?.toLowerCase() === GENDER.MALE);

      case DOCTOR_FILTERS.FAVORITE:
        return list.filter(item => item.isFavorite);

      case DOCTOR_FILTERS.AZ:
      default:
        return list.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [doctors, selectedFilter]);

  const handleRetry = () => {
    dispatch(fetchDoctors());
  };

  const renderDoctor = ({ item }) => {
    switch (selectedFilter) {
      case DOCTOR_FILTERS.RATING:
        return <Rating item={item} />;

      case DOCTOR_FILTERS.FAVORITE:
        if (favoriteTab === 'services') {
          return <ServicesList />;
        }
        return <DoctorCard item={item} />;

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

      {selectedFilter === DOCTOR_FILTERS.FAVORITE && (
        <FavoriteTabs selectedTab={favoriteTab} onChange={setFavoriteTab} />
      )}

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="small" color={colors.primary} />
        </View>
      ) : error ? (
        <View style={styles.loader}>
          <Text style={styles.errorText}>{error}</Text>

          <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
            <Text style={styles.retryText}>Retry</Text>
          </TouchableOpacity>
        </View>
      ) : filteredDoctors.length === 0 ? (
        <View style={styles.loader}>
          <Text style={styles.emptyText}>
            {selectedFilter === DOCTOR_FILTERS.FAVORITE
              ? EMPTY_STATE_MESSAGES.NO_FAVORITES
              : EMPTY_STATE_MESSAGES.NO_DOCTORS}
          </Text>
        </View>
      ) : (
        <FlatList
          data={
            selectedFilter === DOCTOR_FILTERS.FAVORITE &&
            favoriteTab === 'services'
              ? [1]
              : filteredDoctors
          }
          keyExtractor={(item, index) =>
            typeof item === 'object' ? item.id.toString() : index.toString()
          }
          renderItem={renderDoctor}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
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
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    gap: Screen_SIZES_VerticalScale.twelve,
    paddingTop: vs(40),
  },

  errorText: {
    textAlign: 'center',
    color: colors.designBlack,
  },

  emptyText: {
    textAlign: 'center',
    color: '#666',
  },

  retryButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: Screen_SIZES_Scale.twentyFour,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
    borderRadius: Screen_SIZES_Scale.twenty,
  },

  retryText: {
    color: colors.white,
    fontWeight: '600',
  },

  listContainer: {
    paddingTop: 12,
    paddingBottom: 100,
  },
});
