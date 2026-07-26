import React, { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { colors } from '../../../themes/colors';
import CustomSwitch from '../../../components/common/CustomSwitch';
import { Fonts } from '../../../themes/font';

const initialNotifications = [
  { id: 1, label: 'General Notification', isEnabled: false },
  { id: 2, label: 'Sound', isEnabled: false },
  { id: 3, label: 'Sound Call', isEnabled: true },
  { id: 4, label: 'Vibrate', isEnabled: false },
  { id: 5, label: 'Special Offers', isEnabled: true },
  { id: 6, label: 'Payments', isEnabled: false },
  { id: 7, label: 'Promo and discount', isEnabled: false },
  { id: 8, label: 'Cashback', isEnabled: true },
];

const NotificationSetting = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const toggleSwitch = id => {
    setNotifications(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isEnabled: !item.isEnabled } : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <ProfileHeader header="Notification Settings" />

      <View style={styles.content}>
        {notifications.map(item => (
          <View key={item.id} style={styles.option}>
            <Text style={styles.label}>{item.label}</Text>

            <CustomSwitch
              value={item.isEnabled}
              onValueChange={() => toggleSwitch(item.id)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  option: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 18,
    fontFamily: Fonts.Regular,
    color: colors.black,
    fontWeight: '400',
  },
});
