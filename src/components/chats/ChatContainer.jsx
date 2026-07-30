import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { chatData } from '../../constants/chatData';
import { ms, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

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
            </View>

            {/* Sender/Doctor Message */}
            <View style={styles.doctorWrapper}>
              <View style={styles.doctorsChat}>
                <Text>{item.senderchatData}</Text>
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
    marginHorizontal: ms(30),
    paddingTop: vs(10),
  },

  chatContainer: {
    marginBottom: vs(20),
  },

  userWrapper: {
    alignItems: 'flex-end',
    marginBottom: vs(12),
  },

  doctorWrapper: {
    alignItems: 'flex-start',
  },

  userChat: {
    backgroundColor: colors.secondary,
    padding: ms(18),
    borderTopLeftRadius: ms(18),
    borderTopRightRadius: ms(18),
    borderBottomLeftRadius: ms(18),
    maxWidth: '75%',
  },

  doctorsChat: {
    backgroundColor: colors.secondary,
    padding: ms(18),
    borderTopLeftRadius: ms(18),
    borderTopRightRadius: ms(18),
    borderBottomRightRadius: ms(18),
    maxWidth: '75%',
  },
});
