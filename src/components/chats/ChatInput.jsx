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
    marginHorizontal: sc(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: ms(10),
    paddingVertical: ms(18),
  },
  pinIcon: {
    backgroundColor: colors.lightblue,
    padding: ms(8),
    borderRadius: ms(18),
  },
  inputContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    gap: ms(8),
    alignItems: 'center',
    borderRadius: ms(18),
    paddingHorizontal: ms(14),
  },
  input: {
    width: sc(150),
  },
  mic: {},
  sendBtn: {
    backgroundColor: colors.primary,
    padding: ms(8),
    borderRadius: ms(22),
    textAlign: 'center',
  },
});
