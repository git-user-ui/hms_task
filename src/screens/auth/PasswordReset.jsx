import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes/colors';

const SetPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.topHeadingContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/left_arrow.png')}
            style={styles.arrow}
          />
        </TouchableOpacity>

        <Text style={styles.topText}>Set Password</Text>
      </View>

      <View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>

      <View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} placeholder="*******" />
        </View>
        <View>
          <Text style={styles.label}>Confirm PassWord</Text>
          <TextInput style={styles.input} placeholder="********" />
        </View>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('SetPassword')}>
            <Text> Create new Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SetPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
  },

  topHeadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topText: {
    color: colors.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },

  arrow: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
});
