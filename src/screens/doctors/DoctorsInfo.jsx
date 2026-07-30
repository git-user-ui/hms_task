import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ms, sc } from '../../utils/responsive';
import DoctorsHeading from '../../components/doctors/DoctorsHeading';
import ProfileCard from '../../components/doctors/ProfileCard';
import InfoSection from '../../components/doctors/InfoSection';

import { useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';

const DoctorsInfo = () => {
  const [selected, setSelected] = useState('Info');

  const route = useRoute();
  const doctorsData = route.params?.doctors;
  return (
    <>
      <DoctorsHeading heading="Doctor Info" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <ProfileCard
          doctorsData={doctorsData}
          selected={selected}
          setSelected={setSelected}
        />

        <InfoSection
          title="Profile"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        {selected && (
          <>
            <InfoSection
              title="Career Path"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <InfoSection
              title="Highlights"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </>
        )}

        {!selected && (
          <>
            <Calendar style={styles.calendarComponent} />
          </>
        )}
      </ScrollView>
    </>
  );
};

export default DoctorsInfo;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
    paddingVertical: sc(10),
    gap: sc(18),
  },
  calendarComponent: {},
});
