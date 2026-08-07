import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { colors } from '../../themes/colors';

import BadgeIcon from '../../assets/svg/badge.svg';
import ChatIcon from '../../assets/svg/chat_payment.svg';
import StarIcon from '../../assets/svg/filled_star.svg';
import ArrowLeft from '../../assets/svg/blue_left_arrow.svg';
import Toast from 'react-native-toast-message';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Screen_SIZES_VerticalScale } from '../../constants/screen';
import { showToast } from '../../utils/showToast';

const Payment = () => {
  const navigation = useNavigation();
  const route = useRoute();

  // Params
  const item = route.params?.doctor;
  const { selectedTime, patientType, formattedDate } = route.params;

  const handlePayment = () => {
    try {
      if (selectedTime) {
      }

      navigation.navigate('PaymentComplete', {
        doctor: item,
        formattedDate,
        selectedTime,
      });
    } catch (error) {
      console.log(error);
      showToast({
        message: 'Something Went Wrong',
      });
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn}>
          <ArrowLeft />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Payment</Text>

        <Text style={styles.price}>$ 100.00</Text>
      </View>

      {/* Body */}
      <View style={styles.content}>
        {/* Doctor */}
        <View style={styles.doctorRow}>
          <Image
            source={{
              uri: item.avatar,
            }}
            style={styles.avatar}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.doctorName}>{item.name}</Text>

            <Text style={styles.speciality}>{item.speciality}</Text>

            <View style={styles.ratingRow}>
              <View style={styles.badge}>
                <StarIcon />
                <Text style={styles.badgeText}>{item.rating}</Text>
              </View>

              <View style={styles.badge}>
                <ChatIcon />
                <Text style={styles.badgeText}>{item.reviews}</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.verifyBtn}>
            <BadgeIcon />
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        {/* Appointment */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Date / Hour</Text>
          <Text style={styles.value}>
            {formattedDate} / {selectedTime}
          </Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>30 Minutes</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Booking for</Text>
          <Text style={styles.value}>{patientType}</Text>
        </View>

        <View style={styles.divider} />

        {/* Payment Summary */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Amount</Text>
          <Text style={styles.value}>$100.00</Text>
        </View>

        <View style={styles.infoRow}>
          <Text style={styles.label}>Duration</Text>
          <Text style={styles.value}>30 Minutes</Text>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.label}>Total</Text>
          <Text style={styles.total}>$100</Text>
        </View>

        <View style={styles.divider} />

        {/* Payment Method */}
        <View style={styles.infoRow}>
          <Text style={styles.label}>Payment Method</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.value}>Card</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentScreen')}
            >
              <Text style={styles.change}>Change</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

  header: {
    backgroundColor: colors.primary,
    height: 220,
    alignItems: 'center',
    paddingTop: 18,
  },

  backBtn: {
    position: 'absolute',
    left: 18,
    top: 20,
  },

  headerTitle: {
    color: colors.white,
    fontSize: 28,
    fontWeight: '700',
    marginTop: 12,
  },

  price: {
    color: colors.white,
    fontSize: 52,
    fontWeight: '700',
    marginTop: 38,
  },

  content: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: -18,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 24,
    paddingTop: 28,
  },

  doctorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 68,
    height: 68,
    borderRadius: 34,
    marginRight: 14,
  },

  doctorName: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: '700',
  },

  speciality: {
    marginTop: 4,
    color: '#888',
    fontSize: 13,
  },

  ratingRow: {
    flexDirection: 'row',
    marginTop: 10,
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF3FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
  },

  badgeText: {
    marginLeft: 5,
    color: colors.primary,
    fontWeight: '600',
    fontSize: 12,
  },

  verifyBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  divider: {
    height: 1,
    backgroundColor: colors.primary,
    marginVertical: Screen_SIZES_VerticalScale.sixteen,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: Screen_SIZES_VerticalScale.ten,
  },

  label: {
    color: colors.primary,
    fontSize: 15,
  },

  value: {
    color: '#111',
    fontWeight: '600',
    fontSize: 15,
  },

  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  total: {
    fontWeight: '700',
    color: '#111',
    fontSize: 22,
  },

  change: {
    color: colors.primary,
    marginLeft: 10,
    fontWeight: '600',
  },

  payButton: {
    height: 58,
    backgroundColor: colors.primary,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: Screen_SIZES_VerticalScale.twenty,
  },

  payText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: '700',
  },
});
