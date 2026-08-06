import React, {
  useEffect,
  useMemo,
  useState,
  useCallback,
  useRef,
} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useNavigation } from '@react-navigation/native';

import ProfileHeader from '../../components/Profile/components/ProfileHeader';
import AppointmentList from '../../components/Appointment/DoctorName';

import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

import {
  flexOne,
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

import {
  fetchDoctors,
  selectDoctors,
  selectDoctorsLoading,
  toggleFavoriteDoctor,
} from '../../redux/slices/doctorsSlice';

import { useDispatch, useSelector } from 'react-redux';

const TABS = [
  {
    id: 1,
    label: 'Complete',
    value: 'Complete',
  },
  {
    id: 2,
    label: 'Upcoming',
    value: 'Upcoming',
  },
  {
    id: 3,
    label: 'Cancelled',
    value: 'Cancelled',
  },
];

const AllAppointmentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const pagerRef = useRef(null);

  const [selectedTab, setSelectedTab] = useState('Complete');
  const [refreshing, setRefreshing] = useState(false);

  const doctors = useSelector(selectDoctors);
  const loading = useSelector(selectDoctorsLoading);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const onRefresh = useCallback(async () => {
    try {
      setRefreshing(true);

      // Refetch doctors
      await dispatch(fetchDoctors()).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  }, [dispatch]);

  const appointmentTab = useMemo(() => {
    return TABS.map(tab => ({
      ...tab,
      data: doctors.filter(item => item.status === tab.value),
    }));
  }, [doctors]);

  const handleTabPress = useCallback(tab => {
    const index = TABS.findIndex(item => item.value === tab);

    setSelectedTab(tab);

    pagerRef.current?.setPage(index);
  }, []);

  const handleReview = useCallback(
    doctor => {
      navigation.navigate('Review', { doctor });
    },
    [navigation],
  );

  const handleCancel = useCallback(
    doctor => {
      navigation.navigate('CancelAppointment', { doctor });
    },
    [navigation],
  );

  const handleRebook = useCallback(doctor => {
    console.log('Rebook', doctor);
  }, []);

  const handleDetails = useCallback(doctor => {
    console.log('Details', doctor);
  }, []);

  const handleFavorite = useCallback(
    doctor => {
      dispatch(toggleFavoriteDoctor(doctor.id));
    },
    [dispatch],
  );

  return (
    <View style={styles.mainContainer}>
      <ProfileHeader header="All Appointment" />

      <View style={styles.container}>
        <View style={styles.optionsContainer}>
          {TABS.map(tab => (
            <TouchableOpacity
              key={tab.id}
              style={[
                styles.btn,
                selectedTab === tab.value && styles.selectedBtn,
              ]}
              onPress={() => handleTabPress(tab.value)}
            >
              <Text
                style={[
                  styles.btnName,
                  selectedTab === tab.value && styles.selectedBtnName,
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <PagerView
          ref={pagerRef}
          style={{ flex: 1 }}
          initialPage={0}
          overScrollMode="never"
          pageMargin={24}
          onPageSelected={e => {
            const index = e.nativeEvent.position;
            setSelectedTab(TABS[index].value);
          }}
        >
          {appointmentTab.map(tab => (
            <View key={tab.id} style={{ flex: 1 }}>
              <AppointmentList
                doctors={doctors}
                loading={loading}
                selected={tab.value}
                data={tab.data}
                refreshing={refreshing}
                onRefresh={onRefresh}
                onReview={handleReview}
                onCancel={handleCancel}
                onFavorite={handleFavorite}
                onRebook={handleRebook}
                onDetails={handleDetails}
              />
            </View>
          ))}
        </PagerView>
      </View>
    </View>
  );
};

export default AllAppointmentScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: flexOne.one,
    backgroundColor: colors.white,
  },

  container: {
    flex: flexOne.one,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.sixteen,
  },

  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  btn: {
    backgroundColor: colors.secondary,
    paddingVertical: Screen_SIZES_ModerateScale.eight,
    paddingHorizontal: Screen_SIZES_ModerateScale.fourteen,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
    marginBottom: Screen_SIZES_VerticalScale.eight,
  },

  selectedBtn: {
    backgroundColor: colors.primary,
  },

  btnName: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    color: colors.primary,
  },

  selectedBtnName: {
    color: colors.white,
  },
});
