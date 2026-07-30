import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import StarIcon from '../../assets/svg/star_icon.svg';
import ChatIcon from '../../assets/svg/chat_home_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';
import { Fonts } from '../../themes/font';

const HomeDoctorsList = ({ doctors }) => {
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        data={doctors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.card}>
            <Image source={{ uri: item.avatar }} style={styles.image} />

            <View style={styles.rightContainer}>
              <View style={styles.infoCard}>
                <Text numberOfLines={1} style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.specialization}>{item.speciality}</Text>
              </View>

              <View style={styles.optionContainer}>
                <View style={styles.reviewContainer}>
                  <View style={styles.badge}>
                    <StarIcon width={11} height={11} />

                    <Text style={styles.badgeText}>{item.rating}</Text>
                  </View>

                  <View style={styles.badge}>
                    <ChatIcon width={11} height={11} />

                    <Text style={styles.badgeText}>{item.reviews}</Text>
                  </View>
                </View>

                <View style={styles.iconContainer}>
                  <View style={styles.iconCircle}>
                    <QuestionIcon width={10} height={10} />
                  </View>

                  <View style={styles.iconCircle}>
                    <HeartIcon width={11} height={11} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default HomeDoctorsList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sc(14),
    marginTop: vs(8),
    paddingBottom: vs(330),
    gap: vs(12),
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: sc(20),
    paddingVertical: vs(8),
    paddingHorizontal: sc(12),
  },

  image: {
    width: ms(80),
    height: ms(80),
    borderRadius: ms(100),
  },

  rightContainer: {
    flex: 1,
    marginLeft: sc(12),
  },

  infoCard: {
    backgroundColor: colors.white,
    borderRadius: sc(14),
    paddingHorizontal: sc(12),
    paddingVertical: vs(4),
  },

  name: {
    color: colors.primary,
    fontSize: ms(15),
    fontWeight: '500',
    fontFamily: Fonts.Medium,
  },

  specialization: {
    marginTop: 2,
    fontSize: ms(12),
    color: '#555',
  },

  optionContainer: {
    marginTop: vs(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sc(6),
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: sc(20),
    paddingHorizontal: sc(8),
    height: vs(22),
    width: sc(50),
  },

  badgeText: {
    marginLeft: sc(4),
    fontSize: ms(11),
    color: colors.primary,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sc(6),
  },

  iconCircle: {
    width: ms(22),
    height: ms(22),
    borderRadius: ms(11),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
