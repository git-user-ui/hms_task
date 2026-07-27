import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';

// Assets
import EyeClose from '../../assets/svg/eye_close.svg';
import { Eye } from 'lucide-react-native';

const PasswordInput = ({ label }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
        placeholder="********"
        placeholderTextColor={'#809CFF'}
        style={styles.inputContainer}
        secureTextEntry={visible ? false : true}
      />
      <TouchableOpacity style={styles.btn} onPress={handleClick}>
        {visible ? <Eye size={20} /> : <EyeClose />}
      </TouchableOpacity>
    </View>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  labelName: {
    fontSize: sc(20),
    fontFamily: Fonts.Medium,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    height: sc(40),
    borderRadius: sc(13),
    marginTop: vs(4),
    backgroundColor: colors.lightblue,
    paddingHorizontal: sc(20),
  },
  btn: {
    position: 'absolute',
    top: vs(40),
    right: sc(10),
  },
});
