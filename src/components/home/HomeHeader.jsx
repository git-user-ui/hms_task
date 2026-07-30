import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { ms, sc, vs } from '../../utils/responsive';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes/colors';

// assets
import Filter from '../../assets/filter.svg';
import SearchIcon from '../../assets/svg/SearchIcon.svg';
import DoctorHome from '../../assets/svg/doctorhome_icon.svg';
import Heart from '../../assets/svg/heart.svg';
import BellIcon from '../../assets/svg/bell_icon.svg';
import Settings from '../../assets/svg/setting_icon.svg';
import DotIcon from '../../assets/svg/dot_icon.svg';
import { Fonts } from '../../themes/font';
import { HomeStrings } from '../../constants/strings';

const HomeHeader = ({ search, onSearch }) => {
  const navigation = useNavigation();

  return (
    <>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/profile_photo.png')}
            style={styles.profile}
          />

          <View>
            <Text style={styles.welcomeText}>{HomeStrings.WelcomeText}</Text>
            <Text style={styles.nameText}>John Doe</Text>
          </View>
        </View>

        <View style={styles.headerIcons}>
          <DotIcon style={styles.dotIcon} />
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Notifications')}
          >
            <BellIcon style={{ padding: 10 }} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => navigation.navigate('Settings')}
          >
            <Settings />
          </TouchableOpacity>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <Pressable
          style={styles.actionButton}
          onPress={() => navigation.navigate('Doctors')}
        >
          <DoctorHome style={styles.doctorIcon} />
          <Text style={styles.doctorsText}>{HomeStrings.doctorstext}</Text>
        </Pressable>

        <Pressable style={styles.actionButton}>
          <Heart style={styles.heartIcon} />
          <Text style={styles.doctorsText}>{HomeStrings.favouriteText}</Text>
        </Pressable>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.leftIconContainer}>
            <Filter width={ms(18)} height={ms(18)} />
          </View>

          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={search}
            onChangeText={onSearch}
          />
          <SearchIcon width={ms(18)} height={ms(18)} />
        </View>
      </View>
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: ms(10),
  },

  profile: {
    width: ms(50),
    height: ms(50),
    borderRadius: ms(25),
  },

  welcomeText: {
    color: colors.primary,
    fontFamily: Fonts.Light,
    fontWeight: '300',
    fontSize: ms(12),
  },

  nameText: {
    color: colors.black,
    fontSize: ms(16),
    fontFamily: Fonts.Regular,
    fontWeight: '400',
  },

  dotIcon: {
    position: 'absolute',
    left: ms(18),
    top: ms(10),
    color: colors.primary,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: ms(8),
  },

  iconButton: {
    backgroundColor: colors.secondary,
    padding: ms(8),
    borderRadius: ms(80),
    justifyContent: 'center',
    alignItems: 'center',
  },

  quickActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vs(12),
    gap: ms(20),
  },

  actionButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: ms(8),
  },

  doctorIcon: {
    width: ms(20),
    height: ms(20),
  },
  doctorsText: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    color: colors.primary,
  },
  heartIcon: {
    width: ms(20),
    height: ms(20),
  },

  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: ms(25),
    paddingRight: ms(12),
    paddingLeft: ms(4),
  },

  leftIconContainer: {
    marginRight: ms(10),
    backgroundColor: colors.white,
    borderRadius: sc(20),
    padding: ms(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: ms(40),
    color: colors.black,
  },

  rightIcon: {
    marginLeft: ms(10),
  },
});
