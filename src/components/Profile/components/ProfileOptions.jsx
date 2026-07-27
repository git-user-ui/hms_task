import {
  Alert,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '../../../themes/colors';

import { useNavigation } from '@react-navigation/native';
import { profileScreenOptions } from '../../../constants/profileOptions';
import { Fonts } from '../../../themes/font';

const ProfileOptions = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(!modalVisible);
  };

  const confirmLogout = () => {
    setModalVisible(false);

    // logout logic here
    Alert.alert('Logged out');
  };
  return (
    <View style={styles.container}>
      {profileScreenOptions.map(screen => (
        <TouchableOpacity
          key={screen.id}
          style={styles.subContainer}
          onPress={() => {
            if (screen.label === 'Logout') {
              handleLogout();
            } else {
              navigation.navigate(screen.href);
            }
          }}
        >
          <View style={styles.profileContainer}>
            <View style={styles.iconContainer}>
              <Image source={screen.icon} />
            </View>

            <Text style={styles.mainName}>{screen.label}</Text>
          </View>

          {screen.label !== 'Logout' && (
            <Image
              source={require('../../../assets/profile/profile_right_arrow.png')}
            />
          )}
        </TouchableOpacity>
      ))}

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <Pressable style={styles.bottomSheet}>
            <Text style={styles.logoutTitle}>Logout</Text>

            <Text style={styles.logoutDesc}>
              Are you sure you want to log out?
            </Text>

            <View style={styles.buttonRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.logoutBtn}
                onPress={confirmLogout}
              >
                <Text style={styles.logoutText}>Yes, Logout</Text>
              </TouchableOpacity>
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  );
};

export default ProfileOptions;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  subContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: colors.secondary,
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    backgroundColor: '#2260FF8A',
  },
  mainName: {
    fontSize: 20,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
    paddingLeft: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(34, 96, 255, 0.54)',
  },

  bottomSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26,

    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 36,
  },

  logoutTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.primary,
    textAlign: 'center',
  },

  logoutDesc: {
    fontSize: 15,
    color: '#1F1F1F',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 26,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cancelBtn: {
    width: '46%',
    height: 48,
    borderRadius: 24,
    backgroundColor: '#C9D6FF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutBtn: {
    width: '46%',
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },

  logoutText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
