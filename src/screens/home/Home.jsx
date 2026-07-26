import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, View } from 'react-native';

import HomeHeader from '../../components/home/HomeHeader';
import HomeAppointment from '../../components/home/HomeAppointment';
import HomeDoctorsList from '../../components/home/HomeDoctorsList';

import api from '../../services/api';
import { sc, vs } from '../../utils/responsive';

const Home = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);

        const { data } = await api.get('/');

        setDoctors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const filteredDoctors = useMemo(() => {
    if (!debouncedSearch.trim()) {
      return doctors;
    }

    return doctors.filter(item =>
      item.name?.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [doctors, debouncedSearch]);

  const handleSearch = useCallback(text => {
    setSearch(text);
  }, []);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <HomeHeader search={search} onSearch={handleSearch} />
      </View>

      <HomeAppointment />

      <HomeDoctorsList doctors={filteredDoctors} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
    paddingTop: vs(10),
  },

  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
