// React
import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AuthStack from './AuthStack';
import AppStack from './AppStack';

// Auth and Reduxs
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setLoggedIn } from '../redux/slices/authSlice';
import { isLoggedIn as checkIsLoggedIn } from '../utils/storage';

// constants
import { flexOne } from '../constants/screen';

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
        <ActivityIndicator size="small" />
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
    flex: flexOne.one,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
