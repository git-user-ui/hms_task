import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const Input = ({ placehlderName }) => {
  return (
    <View>
      <TextInput placeholder={placehlderName} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 25,
    padding: 10,
  },
});
