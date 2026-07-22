import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorsScreen from '../screens/doctors/DoctorsScreen';
import Home from '../screens/home/Home';
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
      <Stack.Screen name="Favorite" component={DoctorsScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
