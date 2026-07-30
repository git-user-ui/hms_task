import { SectionList, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { notificationsData } from '../constants/notificationsData';
import { ms, vs } from '../utils/responsive';
import { colors } from '../themes/colors';
import { Fonts } from '../themes/font';
import ProfileHeader from '../components/Profile/components/ProfileHeader';

import DotIcon from '../assets/svg/dot_icon.svg';

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
    gap: ms(6),
    position: 'absolute',
    right: ms(30),
    top: ms(24),
    borderRadius: ms(12),
    backgroundColor: colors.secondary,
    paddingHorizontal: ms(8),
  },
  innerContainer: {
    backgroundColor: colors.secondary,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    paddingVertical: ms(14),
    marginHorizontal: ms(30),
  },
  seen: {
    backgroundColor: colors.secondary,
  },
  icon: {
    borderRadius: ms(24),
    backgroundColor: colors.primary,
    padding: ms(12),
  },
  msgContainer: {
    maxWidth: '70%',
  },
  titletext: {
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    fontSize: ms(20),
  },

  descText: {
    fontFamily: Fonts.ExtraLight,
    fontWeight: '200',
    fontSize: ms(12),
  },
  dateContainer: {
    marginHorizontal: ms(30),
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: ms(10),
    justifyContent: 'space-between',
  },
  header: {
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    fontSize: ms(20),
    backgroundColor: colors.secondary,
    borderRadius: ms(23),
    paddingHorizontal: ms(18),
    paddingVertical: vs(4),
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
  },
  mark: {
    fontFamily: Fonts.SemiBold,
    fontWeight: '700',
    fontSize: ms(14),
    color: colors.primary,
  },
});
