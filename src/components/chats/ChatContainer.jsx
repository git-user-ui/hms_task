import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { chatData } from '../../constants/chatData';
import { ms, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import { Fonts } from '../../themes/font';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_VerticalScale,
  
} from '../../constants/screen';

const ChatContainer = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.chatContainer}>
            {/* Receiver/User Message */}
            <View style={styles.userWrapper}>
              <View style={styles.userChat}>
                <Text>{item.recieverchatData}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>

            {/* Sender/Doctor Message */}
            <View style={styles.doctorWrapper}>
              <View style={styles.doctorsChat}>
                <Text>{item.senderchatData}</Text>
              </View>
              <View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ChatContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
    paddingTop: Screen_SIZES_VerticalScale.ten,
  },

  chatContainer: {
    marginBottom: Screen_SIZES_VerticalScale.twenty,
  },

  userWrapper: {
    alignItems: 'flex-end',
    marginBottom: Screen_SIZES_VerticalScale.twelve,
  },

  doctorWrapper: {
    alignItems: 'flex-start',
  },

  userChat: {
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.eighteen,
    borderTopLeftRadius: Screen_SIZES_ModerateScale.eighteen,
    borderTopRightRadius: Screen_SIZES_ModerateScale.eighteen,
    borderBottomLeftRadius: Screen_SIZES_ModerateScale.eighteen,
    maxWidth: '75%',
  },

  doctorsChat: {
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.eighteen,
    borderTopLeftRadius: Screen_SIZES_ModerateScale.eighteen,
    borderTopRightRadius: Screen_SIZES_ModerateScale.eighteen,
    borderBottomRightRadius: Screen_SIZES_ModerateScale.eighteen,
    maxWidth: '75%',
  },
  time: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: 12,
  },
});
