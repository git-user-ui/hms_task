import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useRoute } from '@react-navigation/native';

import ProfileCard from '../../components/doctors/ProfileCard';
import InfoSection from '../../components/doctors/InfoSection';

import { sc, vs } from '../../utils/responsive';
import { ROUTE_PARAMS } from '../../constants/routes';
import ScheduleHeader from '../../components/doctors/scheduleHeader';
import ScheduleCalendar from '../../components/doctors/ScheduleCalender';

const ScheduleScreen = () => {
  const route = useRoute();

  const doctor = route.params?.[ROUTE_PARAMS.DOCTORS];

  const [selectedDate, setSelectedDate] = useState(null);
  const [isFavorite, setIsFavorite] = useState(!!doctor?.isFavorite);

  return (
    <>
      <ScheduleHeader
        isFavorite={isFavorite}
        onToggleFavorite={() => setIsFavorite(prev => !prev)}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ProfileCard doctorsData={doctor} showActions={false} />

        <InfoSection
          title="Profile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />

        <View style={styles.calendarSpacing}>
          <ScheduleCalendar
            selectedDate={selectedDate}
            onSelectDate={setSelectedDate}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.ten,
    paddingBottom: vs(50),
  },

  calendarSpacing: {
    marginTop: vs(18),
  },
});
