import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorsScreen from '../screens/doctors/DoctorsScreen';
import Home from '../screens/home/Home';
import { colors } from '../themes/colors';
import DoctorsInfo from '../screens/doctors/DoctorsInfo';
import Rating from '../components/doctors/Rating';
import Favorite from '../components/doctors/favorite/Favorite';
import Notifications from '../screens/Notifications';

import AppointmentStack from './AppointMentStack';
import Details from '../screens/doctors/Details';
import Schedule from '../screens/doctors/Schedule';
import ScheduleScreen from '../screens/doctors/DoctorsSchedule';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Doctors" component={DoctorsScreen} />
      <Stack.Screen name="Info" component={DoctorsInfo} />
      <Stack.Screen name="Rating" component={Rating} />

      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen name="Schedule" component={Schedule} />

      <Stack.Screen name="Details" component={Details} />

      {/* Notification */}
      <Stack.Screen name="Notifications" component={Notifications} />

      {/* AppointMent */}
      <Stack.Screen name="AppointmentScreens" component={AppointmentStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
