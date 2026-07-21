import { StyleSheet, Switch, Text, View } from 'react-native';
import React, { useState } from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { colors } from '../../../themes/colors';

const notificationsOptions = [
  { id: 1, label: 'General Notification', isEnabled: false },
  { id: 2, label: 'Sound', isEnabled: false },
  { id: 3, label: 'Sound Call', isEnabled: true },
  { id: 4, label: 'Vibrate', isEnabled: false },
  { id: 5, label: 'Special Offers', isEnabled: true },
  { id: 6, label: 'Payments', isEnabled: false },
  { id: 7, label: 'Promo and discount', isEnabled: false },
  { id: 8, label: 'Casback', isEnabled: true },
];
const NotificationSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <ProfileHeader header={'Notification Settings'} />
      <View style={styles.container}>
        {notificationsOptions.map(options => (
          <View key={options.id} style={styles.options}>
            <View>
              <Text style={styles.labelName}>{options.label}</Text>
            </View>
            <View>
              <Switch
                style={styles.togglebtn}
                trackColor={{ false: colors.secondary, true: colors.primary }}
                thumbColor={isEnabled ? colors.white : colors.white}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default NotificationSetting;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  options: {
    marginVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  labelName: {
    fontSize: 20,
  },
});
