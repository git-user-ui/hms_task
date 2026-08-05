import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';

import LeftArrow from '../../assets/svg/blue_left_arrow.svg';
import ArrowDown from '../../assets/svg/ArrowDown.svg';
import CallIcon from '../../assets/svg/call_icon.svg';
import VideoIcon from '../../assets/svg/white_video_call.svg';
import ChatIcon from '../../assets/svg/white_chat_icon.svg';
import FavouriteHeart from '../../assets/svg/favorite_heart.svg';
import QuestionIcon from '../../assets/svg/question_icon.svg';

import { colors } from '../../themes/colors';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';
import ButtonComp from '../../components/common/Button';

import { useNavigation, useRoute } from '@react-navigation/native';
import { vs } from '../../utils/responsive';

const timeSlots = [
  '9:00 AM',
  '9:30 AM',
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '12:30 PM',
  '1:00 PM',
  '1:30 PM',
  '2:00 PM',
  '2:30 PM',
  '3:00 PM',
  '3:30 PM',
  '4:00 PM',
];

const Schedule = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const doctors = route.params?.doctors;

  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [patientType, setPatientType] = useState('another');
  const [gender, setGender] = useState('female');

  const [fullName, setFullName] = useState('Jane Doe');
  const [age, setAge] = useState('30');
  const [problem, setProblem] = useState(
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  );

  return (
    <View style={styles}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainContainer}>
          <View style={styles.nameIconContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <LeftArrow />
            </TouchableOpacity>

            <View style={styles.nameContainer}>
              <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {doctors.name}
              </Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.callIcon}>
                <CallIcon />
              </View>
              <View style={styles.callIcon}>
                <VideoIcon />
              </View>
              <View style={styles.callIcon}>
                <ChatIcon />
              </View>
            </View>
          </View>
          <View style={styles.iconContainer}>
            <View style={styles.reviewsIcon}>
              <QuestionIcon />
            </View>
            <View style={styles.reviewsIcon}>
              <FavouriteHeart />
            </View>
          </View>
        </View>

        <View style={styles.dateSection}>
          <View style={styles.monthRow}>
            <Text style={styles.monthText}>Month</Text>
            <ArrowDown />
          </View>

          <View style={styles.daysRow}>
            <TouchableOpacity>
              <LeftArrow />
            </TouchableOpacity>

            {[
              { day: '22', week: 'MON' },
              { day: '23', week: 'TUE' },
              { day: '24', week: 'WED', active: true },
              { day: '25', week: 'THU' },
              { day: '26', week: 'FRI' },
              { day: '27', week: 'SAT' },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.dayCard, item.active && styles.activeDayCard]}
              >
                <Text
                  style={[
                    styles.dayNumber,
                    item.active && styles.activeDayText,
                  ]}
                >
                  {item.day}
                </Text>

                <Text
                  style={[
                    styles.weekText,
                    item.active && styles.activeWeekText,
                  ]}
                >
                  {item.week}
                </Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity>
              <LeftArrow style={styles.rightArrow} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.sectionTitle}>Available Time</Text>

          <View style={styles.timeGrid}>
            {timeSlots.map((time, index) => {
              const selected = selectedTime === time;

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.8}
                  onPress={() => setSelectedTime(time)}
                  style={[styles.timeChip, selected && styles.selectedTimeChip]}
                >
                  <Text
                    style={[
                      styles.timeText,
                      selected && styles.selectedTimeText,
                    ]}
                  >
                    {time}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/*  */}
        <View style={styles.patientContainer}>
          <Text style={styles.sectionTitle}>Patient Details</Text>

          {/* Patient Type */}

          <View style={styles.segmentContainer}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPatientType('yourself')}
              style={[
                styles.segmentButton,
                patientType === 'yourself' && styles.segmentActive,
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  patientType === 'yourself' && styles.segmentActiveText,
                ]}
              >
                Yourself
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setPatientType('another')}
              style={[
                styles.segmentButton,
                patientType === 'another' && styles.segmentActive,
              ]}
            >
              <Text
                style={[
                  styles.segmentText,
                  patientType === 'another' && styles.segmentActiveText,
                ]}
              >
                Another Person
              </Text>
            </TouchableOpacity>
          </View>

          {/* Full Name */}

          <Text style={styles.label}>Full Name</Text>

          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Full Name"
            placeholderTextColor="#9DA7D7"
            style={styles.input}
          />

          {/* Age */}

          <Text style={styles.label}>Age</Text>

          <TextInput
            value={age}
            onChangeText={setAge}
            keyboardType="number-pad"
            style={styles.input}
          />

          {/* Gender */}

          <Text style={styles.label}>Gender</Text>

          <View style={styles.genderRow}>
            {['male', 'female', 'other'].map(item => (
              <TouchableOpacity
                key={item}
                activeOpacity={0.8}
                onPress={() => setGender(item)}
                style={[
                  styles.genderChip,
                  gender === item && styles.genderActive,
                ]}
              >
                <Text
                  style={[
                    styles.genderText,
                    gender === item && styles.genderActiveText,
                  ]}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text>Describe your Problem</Text>
          <TextInput
            value={problem}
            onChangeText={setProblem}
            textAlignVertical="top"
            multiline
            numberOfLines={4}
            placeholder="Enter your Problem here...."
            style={styles.inputBox}
          />
        </View>

        <View style={styles.btn}>
          <ButtonComp
            width={'80%'}
            text={'Book Appointment'}
            onPress={() =>
              navigation.navigate('Details', {
                doctor: doctors,
                selectedTime,
                patientType,
                gender,
                fullName,
                age,
                problem,
              })
            }
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Schedule;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
  },
  mainContainer: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_ModerateScale.ten,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.eight,
    justifyContent: 'space-between',
  },
  nameIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_ModerateScale.six,
  },
  nameContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: Screen_SIZES_ModerateScale.eight,
    paddingVertical: Screen_SIZES_ModerateScale.six,
    borderRadius: Screen_SIZES_ModerateScale.twentyFour,
  },
  name: {
    color: colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: Screen_SIZES_ModerateScale.two,
    alignItems: 'center',
  },
  callIcon: {
    width: Screen_SIZES_ModerateScale.twentyEight,
    height: Screen_SIZES_ModerateScale.twentyEight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: Screen_SIZES_ModerateScale.eight,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  reviewsIcon: {
    width: Screen_SIZES_ModerateScale.twentyEight,
    height: Screen_SIZES_ModerateScale.twentyEight,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.eight,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  dateContainer: {},
  dateSection: {
    backgroundColor: colors.secondary,
    marginTop: Screen_SIZES_ModerateScale.twenty,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    paddingVertical: Screen_SIZES_ModerateScale.eighteen,
  },

  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Screen_SIZES_ModerateScale.twelve,
  },

  monthText: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    fontWeight: '600',
    marginRight: Screen_SIZES_Scale.four,
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dayCard: {
    width: Screen_SIZES_ModerateScale.fourty,
    height: Screen_SIZES_VerticalScale.fifty,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeDayCard: {
    backgroundColor: colors.primary,
  },

  dayNumber: {
    fontSize: Screen_SIZES_ModerateScale.twentyFour,
    fontWeight: '700',
    color: colors.primary,
  },

  activeDayText: {
    color: colors.white,
  },

  weekText: {
    fontSize: Screen_SIZES_ModerateScale.ten,
    color: colors.secondary,
    marginTop: Screen_SIZES_VerticalScale.four,
  },

  activeWeekText: {
    color: colors.white,
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
  },
  timeContainer: {
    marginTop: Screen_SIZES_VerticalScale.eighteen,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
  },

  sectionTitle: {
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeChip: {
    width: '18%',
    height: Screen_SIZES_VerticalScale.twentyFour,
    marginBottom: Screen_SIZES_ModerateScale.ten,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedTimeChip: {
    backgroundColor: colors.primary,
  },

  timeText: {
    fontSize: Screen_SIZES_ModerateScale.ten,
    color: colors.blue,
    fontWeight: '500',
  },

  selectedTimeText: {
    color: colors.white,
  },
  patientContainer: {
    marginTop: Screen_SIZES_VerticalScale.twenty,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
  },

  segmentContainer: {
    flexDirection: 'row',
    marginTop: Screen_SIZES_VerticalScale.twelve,
    marginBottom: Screen_SIZES_VerticalScale.eighteen,
  },

  segmentButton: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.twenty,
    paddingHorizontal: Screen_SIZES_ModerateScale.sixteen,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen_SIZES_ModerateScale.eight,
  },

  segmentActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  segmentText: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  segmentActiveText: {
    color: colors.white,
  },

  label: {
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    color: colors.black,
    marginBottom: Screen_SIZES_VerticalScale.eight,
  },

  input: {
    height: 48,
    backgroundColor: colors.lightblue,
    borderRadius: Screen_SIZES_ModerateScale.fourteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    color: colors.primary,
    marginBottom: Screen_SIZES_VerticalScale.sixteen,
  },

  genderRow: {
    flexDirection: 'row',
  },

  genderChip: {
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Screen_SIZES_ModerateScale.ten,
  },

  genderActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  genderText: {
    color: colors.primary,
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  genderActiveText: {
    color: colors.white,
  },
  inputContainer: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.ten,
    gap: Screen_SIZES_ModerateScale.ten,
  },
  inputBox: {
    paddingHorizontal: Screen_SIZES_ModerateScale.ten,
    height: 140,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
  },
  btn: {
    marginVertical: Screen_SIZES_VerticalScale.twenty,
  },
});
