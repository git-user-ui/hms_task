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

const ProfileOptions = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    setModalVisible(!modalVisible);
  };
  const confirmLogout = () => {
    Alert.alert('Looged out');
    setModalVisible(!modalVisible);
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
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>LogOut</Text>
            <Text style={styles.modalText}>Are you sure want to logout</Text>
            <View style={styles.btn}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={confirmLogout}
              >
                <Text style={styles.textStyle}>Logout</Text>
              </Pressable>
            </View>
          </View>
        </View>
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
    fontWeight: '400',
    paddingLeft: 20,
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    padding: 35,
    alignItems: 'center',
  },
  btn: {
    flexDirection: 'row',
    gap: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
