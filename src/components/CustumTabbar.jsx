import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import HomeIcon from '../assets/svg/tab/bottomhome_icon.svg';
import ChatIcon from '../assets/svg/tab/bottomchat_icon.svg';
import ProfileIcon from '../assets/svg/tab/bottomprofile_icon.svg';
import CalendarIcon from '../assets/svg/tab/bottomcalendar_icon.svg';

import { colors } from '../themes/colors';
import { vs } from '../utils/responsive';

export default function CustomTabBar({ state, navigation }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;

          const onPress = () => {
            navigation.navigate(route.name);
          };

          let Icon;

          switch (route.name) {
            case 'Home':
              Icon = HomeIcon;
              break;
            case 'Chats':
              Icon = ChatIcon;
              break;
            case 'Profile':
              Icon = ProfileIcon;
              break;
            case 'Calender':
              Icon = CalendarIcon;
              break;
          }

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.8}
              style={styles.item}
              onPress={onPress}
            >
              <Icon
                width={24}
                height={24}
                color={focused ? colors.blue : 'rgba(255,255,255,.55)'}
                stroke={focused ? colors.blue : 'rgba(255,255,255,.55)'}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: vs(60),
    backgroundColor: colors.white,
  },

  container: {
    width: '84%',
    height: 48,
    backgroundColor: '#2F66F6',
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item: {
    width: 60,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
