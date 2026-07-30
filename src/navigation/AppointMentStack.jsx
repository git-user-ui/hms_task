import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../themes/colors';

import CancelAppointment from '../screens/appointment/CancelAppointment';
import Review from '../screens/appointment/Review';
import AllAppointmentScreen from '../screens/appointment/AllAppointmentScreen';

const Stack = createNativeStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      <Stack.Screen name="AppointmentScreen" component={AllAppointmentScreen} />
      <Stack.Screen name="CancelAppointment" component={CancelAppointment} />
      <Stack.Screen name="Review" component={Review} />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
