import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEYS } from '../constants/storageKeys';

export { STORAGE_KEYS };

export const saveUser = async user => {
  await AsyncStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
};

export const getUser = async () => {
  const user = await AsyncStorage.getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null;
};

export const loginUser = async () => {
  await AsyncStorage.setItem(STORAGE_KEYS.LOGIN, 'true');
};

export const logoutUser = async () => {
  await AsyncStorage.removeItem(STORAGE_KEYS.LOGIN);
};

export const isLoggedIn = async () => {
  const value = await AsyncStorage.getItem(STORAGE_KEYS.LOGIN);
  return value === 'true';
};
