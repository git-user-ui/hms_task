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
import { Screen_SIZES_Scale } from '../../constants/screen';
import ButtonComp from '../../components/common/Button';

import { useNavigation } from '@react-navigation/native';

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
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [patientType, setPatientType] = useState('another');
  const [gender, setGender] = useState('female');

  const [fullName, setFullName] = useState('Jane Doe');
  const [age, setAge] = useState('30');

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
                Dr. Olivia Turner, M.D. Dr. Olivia Turner, M.D.
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
            onPress={() => navigation.navigate('Details', {})}
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
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
  },
  nameIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  nameContainer: {
    flex: 1,
    minWidth: 0,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 24,
  },
  name: {
    color: colors.white,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center',
  },
  callIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    padding: 8,
    borderRadius: 18,
  },
  reviewsIcon: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    padding: 8,
    borderRadius: 18,
  },
  dateContainer: {},
  dateSection: {
    backgroundColor: '#DCE4FF',
    marginTop: 20,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    paddingVertical: 18,
  },

  monthRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },

  monthText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
    marginRight: 6,
  },

  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dayCard: {
    width: 40,
    height: 64,
    borderRadius: 18,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeDayCard: {
    backgroundColor: colors.primary,
  },

  dayNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
  },

  activeDayText: {
    color: '#fff',
  },

  weekText: {
    fontSize: 11,
    color: '#8E9AC8',
    marginTop: 4,
  },

  activeWeekText: {
    color: '#fff',
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
  },
  timeContainer: {
    marginTop: 18,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 14,
  },

  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  timeChip: {
    width: '18%',
    height: 34,
    marginBottom: 10,
    borderRadius: 17,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectedTimeChip: {
    backgroundColor: colors.primary,
  },

  timeText: {
    fontSize: 11,
    color: '#8A97C9',
    fontWeight: '500',
  },

  selectedTimeText: {
    color: '#fff',
  },
  patientContainer: {
    marginTop: 20,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
  },

  segmentContainer: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 18,
  },

  segmentButton: {
    borderWidth: 1,
    borderColor: '#A8B8FF',
    borderRadius: 20,
    paddingHorizontal: 16,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },

  segmentActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  segmentText: {
    color: colors.primary,
    fontSize: 13,
  },

  segmentActiveText: {
    color: '#fff',
  },

  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
  },

  input: {
    height: 48,
    backgroundColor: '#EEF2FF',
    borderRadius: 14,
    paddingHorizontal: 18,
    color: colors.primary,
    marginBottom: 16,
  },

  genderRow: {
    flexDirection: 'row',
  },

  genderChip: {
    borderWidth: 1,
    borderColor: '#A8B8FF',
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  genderActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  genderText: {
    color: colors.primary,
    fontSize: 13,
  },

  genderActiveText: {
    color: '#fff',
  },
  inputContainer: {
    paddingHorizontal: Screen_SIZES_Scale.thirty,

    marginTop: 10,
    gap: 10,
  },
  inputBox: {
    paddingHorizontal: 10,
    height: 140,
    borderWidth: 1,
    borderColor: colors.secondary,
    borderRadius: 18,
  },
  btn: {
    marginVertical: 20,
  },
});
