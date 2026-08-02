import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../configs/context';
import { isLoggedIn as checkIsLoggedIn } from '../utils/storage';

const AppNavigator = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const value = await checkIsLoggedIn();
      setLoggedIn(value);
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
