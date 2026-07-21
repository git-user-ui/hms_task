import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import Input from '../../../components/common/Input';

const PasswordManager = () => {
  return (
    <View>
      <ProfileHeader header={'Password Manager'} />
      <View>
        <View>
          <Text>Current Password</Text>
          <View style={styles.inputField}>
            <Input placehlderName={'current Password'} />
            <Image source={require('../../../assets/eye_close.png')} />
          </View>
          <Text>forgot password?</Text>
        </View>

        {/* New password Section */}
        <View>
          <View>
            <Text>New Password</Text>
            <View style={styles.inputField}>
              <Input placehlderName={'current Password'} />
              <Image source={require('../../../assets/eye_close.png')} />
            </View>
          </View>
          <View>
            <Text>Confirm New Password</Text>
            <View style={styles.inputField}>
              <Input placehlderName={'current Password'} />
              <Image source={require('../../../assets/eye_close.png')} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PasswordManager;

const styles = StyleSheet.create({
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
