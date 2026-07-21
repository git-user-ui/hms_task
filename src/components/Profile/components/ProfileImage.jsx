import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const fullName = 'John Doe';

const ProfileImage = () => {
  return (
    <View>
      <View style={styles.profileSection}>
        <View>
          <Image
            source={require('../../../assets/profile_photo.png')}
            style={styles.profile}
          />

          <Image
            source={require('../../../assets/icons/pencil_icon.png')}
            style={styles.editIcon}
          />
        </View>
        <Text style={styles.profileName}>{fullName}</Text>
      </View>
      <View></View>
    </View>
  );
};

export default ProfileImage;

const styles = StyleSheet.create({
  profileSection: {
    marginTop: 20,
    alignItems: 'center',
  },
  profile: {
    width: 106,
    height: 106,
    borderRadius: 60,
    objectFit: 'cover',
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
  },
});
