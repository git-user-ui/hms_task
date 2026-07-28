import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../configs/context';

const AppNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const value = await AsyncStorage.getItem('LOGIN');
      setLoggedIn(value === 'true');
    } catch (error) {
      console.log(error);
      setLoggedIn(false);
    }
  };

  if (loggedIn === null) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
      <NavigationContainer>
        {loggedIn ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
