// React Imports
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Redux Imports
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchDoctors,
  selectDoctors,
  selectDoctorsError,
} from '../../redux/slices/doctorsSlice';

//Components Import
import HomeHeader from '../../components/home/HomeHeader';
import HomeDoctorsList from '../../components/home/HomeDoctorsList';

// Themes
import { colors } from '../../themes/colors';

// Constants
import { EMPTY_STATE_MESSAGES } from '../../constants/messages';
import {
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const Home = () => {
  const dispatch = useDispatch();

  const doctors = useSelector(selectDoctors);
  const error = useSelector(selectDoctorsError);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    (async () => {
      dispatch(fetchDoctors());
    })();
  }, [dispatch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const filteredDoctors = () => {
    if (!debouncedSearch.trim()) {
      return doctors;
    }

    return doctors.filter(item =>
      item.name?.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  };

  const handleSearch = text => {
    setSearch(text);
  };

  const handleRetry = () => {
    dispatch(fetchDoctors());
  };

  if (error) {
    return (
      <View style={styles.loader}>
        <Text style={styles.errorText}>{error}</Text>

        <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
          <Text style={styles.retryText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <View style={styles.container}>
        <HomeHeader search={search} onSearch={handleSearch} />
      </View>

      <HomeDoctorsList doctors={filteredDoctors()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    paddingTop: Screen_SIZES_VerticalScale.ten,
  },

  errorText: {
    textAlign: 'center',
    color: colors.designBlack,
  },

  emptyText: {
    textAlign: 'center',
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
});
