import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { colors } from '../../themes/colors';
import api from '../../services/api';

import CrossIocn from '../../assets/svg/cross_icon.svg';
import CorrectIcon from '../../assets/svg/correct_icon.svg';
import { ms, sc, vs } from '../../utils/responsive';
import { Fonts } from '../../themes/font';
import { useNavigation } from '@react-navigation/native';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const DoctorName = ({ selected }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        setLoading(true);
        const { data } = await api.get('/');
        setDoctors(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const handleAddReview = doctor => {
    navigation.navigate('Review', {
      doctor,
    });
  };
  const handleCancel = doctor => {
    navigation.navigate('CancelAppointment', {
      doctor,
    });
  };

  return (
    <>
      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
          data={doctors}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.avatar }} style={styles.image} />

                <View style={styles.infoCard}>
                  <Text numberOfLines={1} style={styles.name}>
                    {item.name}
                  </Text>

                  <Text style={styles.specialization}>{item.speciality}</Text>
                </View>
              </View>

              <View style={styles.rightContainer}>
                {selected === 'Complete' && (
                  <View style={styles.completeSection}>
                    <TouchableOpacity style={styles.rebookBtn}>
                      <Text style={styles.addReviewText}>Re-Book</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rebookBtn}
                      onPress={() => handleAddReview(item)}
                    >
                      <Text style={styles.addReviewText}>Add Review</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {selected === 'Upcoming' && (
                  <View style={styles.optionContainer}>
                    <View style={styles.reviewContainer}>
                      <TouchableOpacity style={styles.detailsBtn}>
                        <Text style={styles.addReviewText}>Deatails</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={styles.iconContainer}>
                      <View style={styles.iconCircle}>
                        <CorrectIcon width={10} height={10} />
                      </View>

                      <TouchableOpacity
                        style={styles.iconCircle}
                        onPress={() => handleCancel(item)}
                      >
                        <CrossIocn width={11} height={11} />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                <View>
                  {selected === 'Cancelled' && (
                    <>
                      <TouchableOpacity
                        style={styles.addReviewBtn}
                        onPress={() => handleAddReview(item)}
                      >
                        <Text style={styles.addReviewText}>Add Review</Text>
                      </TouchableOpacity>
                    </>
                  )}
                </View>
              </View>
            </View>
          )}
        />
      )}
    </>
  );
};

export default DoctorName;

const styles = StyleSheet.create({
  container: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    paddingBottom: vs(240),
    gap: Screen_SIZES_VerticalScale.twelve,
  },

  card: {
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingVertical: Screen_SIZES_VerticalScale.eight,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
  },
  loader: {
    height: vs(400),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },

  image: {
    width: ms(60),
    height: ms(60),
    borderRadius: Screen_SIZES_ModerateScale.hundered,
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  infoCard: {
    borderRadius: Screen_SIZES_Scale.fourteen,
    paddingHorizontal: Screen_SIZES_Scale.twelve,
    paddingVertical: Screen_SIZES_VerticalScale.four,
  },

  name: {
    color: colors.primary,
    fontSize: ms(15),
    fontWeight: '500',
    fontFamily: Fonts.Medium,
  },

  specialization: {
    marginTop: 2,
    fontSize: Screen_SIZES_ModerateScale.twelve,
    color: '#555',
  },

  optionContainer: {
    marginTop: Screen_SIZES_VerticalScale.eight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_Scale.twenty,
    paddingHorizontal: Screen_SIZES_Scale.eight,
    height: Screen_SIZES_VerticalScale.twentyTwo,
    width: sc(50),
  },

  badgeText: {
    marginLeft: Screen_SIZES_Scale.four,
    fontSize: ms(11),
    color: colors.primary,
    fontWeight: '600',
  },

  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Screen_SIZES_Scale.six,
  },

  iconCircle: {
    width: Screen_SIZES_ModerateScale.twentyTwo,
    height: Screen_SIZES_ModerateScale.twentyTwo,
    borderRadius: ms(11),
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsBtn: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
  },
  rebookBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
    marginHorizontal: ms(5),
  },
  addReviewBtn: {
    backgroundColor: colors.primary,
    paddingVertical: Screen_SIZES_VerticalScale.six,
    alignItems: 'center',
    borderRadius: Screen_SIZES_ModerateScale.eighteen,
    paddingHorizontal: Screen_SIZES_ModerateScale.eighteen,
  },
  addReviewText: {
    color: colors.white,
  },
});
