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
    <View>
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
    </View>
  );
};

export default DoctorName;

const styles = StyleSheet.create({
  container: {
    marginTop: vs(8),
    paddingBottom: vs(240),
    gap: vs(12),
  },

  card: {
    backgroundColor: colors.secondary,
    borderRadius: sc(20),
    paddingVertical: vs(8),
    paddingHorizontal: sc(12),
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: ms(60),
    height: ms(60),
    borderRadius: ms(100),
  },
  imageContainer: {
    flexDirection: 'row',
    marginBottom: vs(14),
  },

  infoCard: {
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
  completeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsBtn: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingVertical: vs(6),
    borderRadius: ms(18),
    paddingHorizontal: ms(18),
  },
  rebookBtn: {
    flex: 1,
    backgroundColor: colors.primary,
    paddingVertical: vs(6),
    alignItems: 'center',
    borderRadius: ms(18),
    paddingHorizontal: ms(18),
    marginHorizontal: ms(5),
  },
  addReviewBtn: {
    backgroundColor: colors.primary,
    paddingVertical: vs(6),
    alignItems: 'center',
    borderRadius: ms(18),
    paddingHorizontal: ms(18),
  },
  addReviewText: {
    color: colors.white,
  },
});
