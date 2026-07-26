import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const DeleteAccount = () => {
  return (
    <View style={styles.container}>
      <Text>DeleteAccount</Text>
    </View>
  );
};

export default DeleteAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
