import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import DoctorsScreen from '../screens/doctors/DoctorsScreen';
import Home from '../screens/home/Home';
import DoctorsInfo from '../screens/doctors/DoctorsInfo';
import Notifications from '../screens/Notifications';
import Details from '../screens/doctors/Details';
import Schedule from '../screens/doctors/Schedule';
import ScheduleScreen from '../screens/doctors/DoctorsSchedule';

// Stacks
import AppointmentStack from './AppointMentStack';

// Themes
import { colors } from '../themes/colors';

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

      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen name="Schedule" component={Schedule} />

      <Stack.Screen name="Details" component={Details} />

      {/* Notification */}
      {/* <Stack.Screen name="Notifications" component={Notifications} /> */}

      {/* AppointMent */}
      <Stack.Screen name="AppointmentScreens" component={AppointmentStack} />
    </Stack.Navigator>
  );
};

export default HomeStack;
