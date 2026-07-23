import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import UpdateProfile from '../screens/profile/UpdateProfile';
import PrivacyPolicy from '../screens/profile/privacy/PrivacyPolicy';
import Settings from '../screens/profile/settings/Settings';
import HelpCenter from '../screens/profile/contact/HelpCenter';
import NotificationSetting from '../screens/profile/settings/NotificationSetting';
import PasswordManager from '../screens/profile/settings/PasswordManager';
import DeleteAccount from '../screens/profile/settings/DeleteAccount';
import { colors } from '../themes/colors';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    >
      {/* Bottom Screens */}
      <Stack.Screen name="Tabs" component={BottomTab} />

      {/* Doctors Screen */}
      {/* <Stack.Screen name="Doctors" component={DoctorsScreen} />
      <Stack.Screen name="Favorite" component={UpdateProfile} /> */}

      {/* Profile Screens */}
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />

      {/* Payment Screens */}
      <Stack.Screen name="Payment" component={UpdateProfile} />

      {/* Settings Screens */}
      <Stack.Screen
        name="NotificationSetting"
        component={NotificationSetting}
      />
      <Stack.Screen name="PasswordManager" component={PasswordManager} />
      <Stack.Screen name="DeleteAccount" component={DeleteAccount} />
    </Stack.Navigator>
  );
};

export default AppStack;

const styles = StyleSheet.create({});
