import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../themes/colors';
import Home from '../screens/home/Home';
import Chat from '../screens/chat/Chat';
import Profile from '../screens/profile/Profile';
import Calender from '../screens/schedule/Calender';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        padding: 20,

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
          marginHorizontal: 30,
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

        tabBarIcon: ({ focused, color }) => {
          let icon;

          if (route.name === 'Home') {
            icon = require('../assets/icons/home_icon.png');
          } else if (route.name === 'Chats') {
            icon = require('../assets/icons/chat_icon.png');
          } else if (route.name === 'Profile') {
            icon = require('../assets/icons/profile_icon.png');
          } else if (route.name === 'Calender') {
            icon = require('../assets/icons/calender_icon.png');
          }

          return (
            <Image
              source={icon}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                tintColor: color,
                opacity: 1,
              }}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Calender" component={Calender} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
