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

const PasswordInput = ({ label, value, onChangeText }) => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Text style={styles.labelName}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
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
    fontSize: Screen_SIZES_Scale.twenty,
    fontFamily: Fonts.Medium,
    fontWeight: '500',
  },
  inputContainer: {
    width: '100%',
    height: sc(40),
    borderRadius: sc(13),
    marginTop: Screen_SIZES_VerticalScale.four,
    backgroundColor: colors.lightblue,
    paddingHorizontal: Screen_SIZES_Scale.twenty,
  },
  btn: {
    position: 'absolute',
    top: vs(40),
    right: Screen_SIZES_Scale.ten,
  },
});
