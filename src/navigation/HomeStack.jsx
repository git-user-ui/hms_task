import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DoctorsScreen from '../screens/doctors/DoctorsScreen';
import Home from '../screens/home/Home';
import { colors } from '../themes/colors';
import DoctorsInfo from '../screens/doctors/DoctorsInfo';
import Rating from '../components/doctors/Rating';
import Favorite from '../components/doctors/favorite/Favorite';

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
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  );
};

export default HomeStack;
