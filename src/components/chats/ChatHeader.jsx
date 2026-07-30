import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '../../themes/colors';

import VoiceCall from '../../assets/svg/voice_call.svg';
import VideoCall from '../../assets/svg/video_call.svg';
import LeftArrow from '../../assets/svg/arrow_left.svg';
import { useNavigation } from '@react-navigation/native';

import { ms, sc } from '../../utils/responsive';
import { Fonts } from '../../themes/font';

const ChatHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.nameContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <LeftArrow />
        </TouchableOpacity>
        <Text style={styles.name}>Dr. Olivia Turner</Text>
      </View>
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <VoiceCall />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <VideoCall />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    padding: sc(30),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(16),
  },
  name: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '600',
    fontSize: ms(20),
    color: colors.white,
  },
  rightContainer: {
    flexDirection: 'row',
    gap: ms(8),
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: ms(24),
    height: ms(24),
    padding: ms(6),
    borderRadius: ms(30),
    backgroundColor: colors.white,
  },
});
