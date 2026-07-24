import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { doctorsData } from '../../utils/doctorsdata';
import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

// assests
import StarIcon from '../../assets/svg/star_icon.svg';
import ChatIcon from '../../assets/svg/chat_home_icon.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';
import HeartIcon from '../../assets/svg/heart.svg';

const HomeDoctorsList = () => {
  return (
    <View style={styles.container}>
      {doctorsData.map(item => (
        <View style={styles.innerContainer} key={item.id}>
          <Image source={item.image} style={styles.image} />
          <View>
            <View style={styles.infoCard}>
              <Text numberOfLines={1} style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.specialization}>{item.specialization}</Text>
            </View>
            <View style={styles.optionContainer}>
              {/* Reviews */}
              <View style={styles.reviewContainer}>
                <View style={styles.star}>
                  <StarIcon />
                  <Text>{item.rating}</Text>
                </View>
                <View style={styles.star}>
                  <ChatIcon />
                  <Text>{item.reviews}</Text>
                </View>
              </View>

              {/* Favourite and Question */}
              <View style={styles.questionContainer}>
                <View style={styles.question}>
                  <QuestionIcon />
                </View>
                <View style={styles.question}>
                  <HeartIcon width={12} height={12} />
                </View>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default HomeDoctorsList;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: sc(30),
    gap: vs(14),
    marginTop: vs(14),
    marginBottom: vs(80),
  },
  innerContainer: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: ms(17),
    padding: ms(14),
  },
  image: {
    width: ms(80),
    height: ms(80),
    borderRadius: 300,
  },
  infoCard: {
    backgroundColor: '#FFF',
    borderRadius: sc(13),
    padding: sc(8),
  },

  name: {
    color: colors.primary,
    fontSize: ms(14),
    fontWeight: '700',
  },

  specialization: {
    marginTop: 2,
    fontSize: ms(12),
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: vs(8),
  },
  reviewContainer: {
    flexDirection: 'row',
    gap: ms(4),
  },
  star: {
    width: ms(44),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: ms(18),
    backgroundColor: colors.white,
  },
  questionContainer: { flexDirection: 'row', gap: ms(4) },
  question: {
    width: ms(18),
    height: ms(18),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: ms(18),
    backgroundColor: colors.white,
  },
});
