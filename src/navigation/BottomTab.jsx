import { Image, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../themes/colors';
import Chat from '../screens/chat/Chat';
import Profile from '../screens/profile/Profile';
import Calender from '../screens/schedule/Calender';
import { scale } from 'react-native-size-matters';
import HomeStack from './HomeStack';

// Assets
import HomeIcon from '../assets/svg/tab/bottomhome_icon.svg';
import ChatIcon from '../assets/svg/tab/bottomchat_icon.svg';
import ProfileIcon from '../assets/svg/tab/bottomprofile_icon.svg';
import CalendarIcon from '../assets/svg/tab/bottomcalendar_icon.svg';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        sceneStyle: {
          backgroundColor: colors.white,
        },
        tabBarLabelVisibilityMode: 'unlabeled',
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          height: 48,
          marginHorizontal: scale(30),
          borderRadius: 35,
          backgroundColor: colors.primary,
        },
        tabBarItemStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarIcon: ({ color }) => {
          if (route.name === 'Home') {
            return <HomeIcon width={24} height={24} />;
          }

          if (route.name === 'Chats') {
            return <ChatIcon width={24} height={24} />;
          }

          if (route.name === 'Profile') {
            return <ProfileIcon width={24} height={24} />;
          }

          if (route.name === 'Calender') {
            return <CalendarIcon width={24} height={24} />;
          }

          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calender" component={Calender} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
