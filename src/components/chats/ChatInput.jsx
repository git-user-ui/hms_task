import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';

import MicIcon from '../../assets/svg/mic_icon.svg';
import PinIcon from '../../assets/svg/pin_icon.svg';
import MessageSend from '../../assets/svg/send_msg.svg';
import { ms, sc, vs } from '../../utils/responsive';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
} from '../../constants/screen';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Pressable style={styles.pinIcon}>
          <PinIcon />
        </Pressable>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Write here...." style={styles.input} />
          <MicIcon style={styles.mic} />
        </View>
        <TouchableOpacity style={styles.sendBtn}>
          <MessageSend />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    backgroundColor: colors.secondary,
  },
  innerContainer: {
    marginHorizontal: Screen_SIZES_Scale.thirty,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: Screen_SIZES_ModerateScale.ten,
    paddingVertical: Screen_SIZES_ModerateScale.eighteen,
  },
  pinIcon: {
    backgroundColor: colors.lightblue,
    padding: Screen_SIZES_ModerateScale.eight,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  inputContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    gap: Screen_SIZES_ModerateScale.eight,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.fourteen,
  },
  input: {
    width: sc(150),
  },
  mic: {},
  sendBtn: {
    backgroundColor: colors.primary,
    padding: Screen_SIZES_ModerateScale.eight,
    borderRadius: Screen_SIZES_ModerateScale.twentyTwo,
    textAlign: 'center',
  },
});
