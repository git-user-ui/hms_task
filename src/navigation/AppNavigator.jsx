import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import AuthStack from './AuthStack';
import AppStack from './AppStack';

import { isLoggedIn as checkIsLoggedIn } from '../utils/storage';
import { setLoading, setLoggedIn } from '../redux/slices/authSlice';

const AppNavigator = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isLoading } = useSelector(state => state.auth);

  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const value = await checkIsLoggedIn();

      dispatch(setLoggedIn(value));
    } catch (error) {
      console.log(error);
      dispatch(setLoggedIn(false));
    } finally {
      dispatch(setLoading(false));
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
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
