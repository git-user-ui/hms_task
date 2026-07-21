import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { settingsScreenOptions } from '../../../constants/profileOptions';
import { colors } from '../../../themes/colors';
import { useNavigation } from '@react-navigation/native';

const Settings = () => {
  const navigation = useNavigation();
  return (
    <View>
      <ProfileHeader header={'Settings'} />
      <View style={styles.container}>
        {settingsScreenOptions.map(screen => (
          <TouchableOpacity
            style={styles.subContainer}
            key={screen.id}
            onPress={() => navigation.navigate(screen.href)}
          >
            <View style={styles.profileContainer}>
              <View style={styles.iconContainer}>
                <Image source={screen.icon} />
              </View>

              <Text style={styles.mainName}>{screen.label}</Text>
            </View>
            <View>
              <Image source={require('../../../assets/right_arrow.png')} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginHorizontal: 30,
  },
  subContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,

    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainName: {
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: 20,
  },
});
