import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <View style={styles.profileSection}>
          <View>
            <Image
              source={require('../../assets/profile_photo.png')}
              style={styles.profile}
            />
          </View>
          <View>
            <Text>Hi, Welcome back</Text>
            <Text>John Doe</Text>
          </View>
        </View>

        <View style={styles.rightSettings}>
          <Image source={require('../../assets/bell_icon.png')} />
          <Image source={require('../../assets/settings_icon.png')} />
        </View>
      </View>

      <View style={styles.searchSection}>
        {/* // Favourite Section */}
        <TouchableOpacity
          style={styles.doctors}
          onPress={() => navigation.navigate('Doctors')}
        >
          <Image
            source={require('../../assets/doctors.png')}
            style={{ height: 20 }}
          />
          <Text>Doctors</Text>
        </TouchableOpacity>
        <View style={styles.doctors}>
          <Image
            source={require('../../assets/heart.png')}
            styles={{ height: 20 }}
          />
          <Text>Favourite</Text>
        </View>

        {/* Search Section */}
        <View style={styles.search}>
          <Image
            source={require('../../assets/filter_icon.png')}
            style={{ position: 'absolute', left: 10 }}
          />
          <TextInput style={styles.searchInput} placeholder="search.." />
          <Image
            source={require('../../assets/search_icon.png')}
            style={{ position: 'absolute', right: 10, marginLeft: 5 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 30,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightSettings: {
    flexDirection: 'row',
    gap: 8,
  },
  searchSection: {
    marginVertical: 20,
    flexDirection: 'row',
    gap: 6,
  },
  doctors: {
    alignItems: 'center',
    gap: 8,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 25,
    width: 230,
    paddingHorizontal: 28,
    marginLeft: 10,
  },
});
