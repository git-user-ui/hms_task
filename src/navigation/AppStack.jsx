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
import PaymentMethod from '../screens/payment/PaymentMethod';
import PaymentComplete from '../screens/payment/PaymentComplete';
import PaymentScreen from '../screens/payment/PaymentScreen';
import Payment from '../screens/payment/Payment';

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

      {/* Profile Screens */}
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="HelpCenter" component={HelpCenter} />

      {/* Payment Screens */}
      <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="Debit" component={PaymentMethod} />
      <Stack.Screen name="ApplePlay" component={PaymentMethod} />
      <Stack.Screen name="PayPal" component={PaymentMethod} />
      <Stack.Screen name="GooglePlay" component={PaymentMethod} />
      <Stack.Screen name="PaymentComplete" component={PaymentComplete} />

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
