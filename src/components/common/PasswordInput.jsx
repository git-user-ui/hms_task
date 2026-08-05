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
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

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
      <TouchableOpacity style={styles.btn} onPress={handleClick} hitSlop={2}>
        {visible ? <Eye height={20} width={22} /> : <EyeClose />}
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
    color: colors.black,
    width: '100%',
    height: sc(40),
    borderRadius: sc(13),
    marginTop: Screen_SIZES_VerticalScale.four,
    backgroundColor: colors.lightblue,
    paddingHorizontal: Screen_SIZES_Scale.twenty,
  },
  btn: {
    padding: Screen_SIZES_ModerateScale.six,
    position: 'absolute',
    top: vs(36),
    right: Screen_SIZES_Scale.ten,
  },
});
