import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { notificationsData } from '../constants/notificationsData';
import { ms, vs } from '../utils/responsive';
import { colors } from '../themes/colors';
import { Fonts } from '../themes/font';
import ProfileHeader from '../components/Profile/components/ProfileHeader';

import DotIcon from '../assets/svg/dot_icon.svg';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_VerticalScale,
} from '../constants/screen';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader header={'Notifications'} />
      <View style={styles.news}>
        <Text style={styles.newsText}>News</Text>
        <DotIcon />
      </View>

      <SectionList
        showsVerticalScrollIndicator={false}
        sections={notificationsData}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={[item.isSeen ? '' : styles.innerContainer]}>
            <View style={[styles.item]}>
              <View style={styles.icon}>{item.icon}</View>
              <View style={styles.msgContainer}>
                <Text style={styles.titletext}>{item.title}</Text>
                <Text style={styles.descText}>{item.desc}</Text>
              </View>
              <View>
                <Text style={styles.time}>{item.time}</Text>
              </View>
            </View>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <View style={styles.dateContainer}>
            <Text style={styles.header}>{section.title}</Text>
            {section.id === 1 && <Text style={styles.mark}>Mark all</Text>}
          </View>
        )}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  news: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.six,
    position: 'absolute',
    right: Screen_SIZES_ModerateScale.thirty,
    top: Screen_SIZES_ModerateScale.twentyFour,
    borderRadius: Screen_SIZES_ModerateScale.twelve,
    backgroundColor: colors.secondary,
    paddingHorizontal: Screen_SIZES_ModerateScale.eight,
  },
  innerContainer: {
    backgroundColor: colors.secondary,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: Screen_SIZES_ModerateScale.fourteen,
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
  },
  seen: {
    backgroundColor: colors.secondary,
  },
  icon: {
    borderRadius: Screen_SIZES_ModerateScale.twentyFour,
    backgroundColor: colors.primary,
    padding: Screen_SIZES_ModerateScale.twelve,
  },
  msgContainer: {
    maxWidth: '70%',
  },
  titletext: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: Screen_SIZES_ModerateScale.twenty,
  },

  descText: {
    fontFamily: Fonts.ExtraLight,
    fontWeight: '200',
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },
  dateContainer: {
    marginHorizontal: Screen_SIZES_ModerateScale.thirty,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Screen_SIZES_ModerateScale.ten,
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: Screen_SIZES_ModerateScale.twenty,
    backgroundColor: colors.secondary,
    borderRadius: ms(23),
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    paddingVertical: Screen_SIZES_VerticalScale.four,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
  },
  mark: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '700',
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    color: colors.primary,
  },
});
