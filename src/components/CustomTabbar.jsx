import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import HomeIcon from '../assets/svg/tab/bottomhome_icon.svg';
import ChatIcon from '../assets/svg/tab/bottomchat_icon.svg';
import ProfileIcon from '../assets/svg/tab/bottomprofile_icon.svg';
import CalendarIcon from '../assets/svg/tab/bottomcalendar_icon.svg';

import { colors } from '../themes/colors';
import { ms, vs } from '../utils/responsive';

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
            case 'Appointment':
              Icon = CalendarIcon;
              break;
          }

          return (
            <TouchableOpacity
              key={route.key}
              activeOpacity={0.4}
              style={styles.item}
              onPress={onPress}
            >
              <Icon
                width={24}
                height={24}
                color={focused ? colors.blue : colors.white}
                stroke={focused ? colors.blue : colors.white}
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
    width: '80%',
    height: 48,
    backgroundColor: colors.primary,
    borderRadius: 32,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  item: {
    width: 50,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
