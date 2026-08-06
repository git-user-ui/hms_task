import { StyleSheet, useColorScheme, View } from 'react-native';
import React from 'react';
import ChatInput from '../../components/chats/ChatInput';
import ChatHeader from '../../components/chats/ChatHeader';
import ChatContainer from '../../components/chats/ChatContainer';
import { Screen_SIZES_Scale } from '../../constants/screen';

const ChatScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <ChatHeader />
      <ChatContainer />
      <ChatInput />
      <View style={styles.container}></View>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Screen_SIZES_Scale.thirty,
  },
});
