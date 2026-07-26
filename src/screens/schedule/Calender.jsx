import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Calender = () => {
  return (
    <View style={styles.container}>
      <Text>Calender</Text>
    </View>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
