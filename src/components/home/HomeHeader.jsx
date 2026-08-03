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
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const HomeHeader = ({ search, onSearch }) => {
  const navigation = useNavigation();

  const handleFavourite = () => {
    navigation.navigate('Doctors', {
      initialFilter: 'Favorite',
    });
  };

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

        <Pressable style={styles.actionButton} onPress={handleFavourite}>
          <Heart style={styles.heartIcon} />
          <Text style={styles.doctorsText}>{HomeStrings.favouriteText}</Text>
        </Pressable>

        {/* Search */}
        <View style={styles.searchContainer}>
          <View style={styles.leftIconContainer}>
            <Filter
              width={Screen_SIZES_ModerateScale.eighteen}
              height={Screen_SIZES_ModerateScale.eighteen}
            />
          </View>

          <TextInput
            style={styles.searchInput}
            placeholder="Search..."
            value={search}
            onChangeText={onSearch}
          />
          <SearchIcon
            width={Screen_SIZES_ModerateScale.eighteen}
            height={Screen_SIZES_ModerateScale.eighteen}
          />
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
    gap: Screen_SIZES_ModerateScale.ten,
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
    fontSize: Screen_SIZES_ModerateScale.twelve,
  },

  nameText: {
    color: colors.black,
    fontSize: Screen_SIZES_ModerateScale.sixteen,
    fontFamily: Fonts.Regular,
    fontWeight: '400',
  },

  dotIcon: {
    zIndex: 1,
    position: 'absolute',
    left: Screen_SIZES_ModerateScale.eighteen,
    top: Screen_SIZES_ModerateScale.ten,
    color: colors.primary,
  },

  headerIcons: {
    flexDirection: 'row',
    gap: Screen_SIZES_ModerateScale.eight,
  },

  iconButton: {
    backgroundColor: colors.secondary,
    padding: Screen_SIZES_ModerateScale.eight,
    borderRadius: ms(80),
    justifyContent: 'center',
    alignItems: 'center',
  },

  quickActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: Screen_SIZES_VerticalScale.eight,
    gap: Screen_SIZES_ModerateScale.twenty,
  },

  actionButton: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: Screen_SIZES_ModerateScale.eight,
  },

  doctorIcon: {
    width: Screen_SIZES_ModerateScale.twenty,
    height: Screen_SIZES_ModerateScale.twenty,
  },
  doctorsText: {
    fontFamily: Fonts.Light,
    fontWeight: '300',
    color: colors.primary,
  },
  heartIcon: {
    width: Screen_SIZES_ModerateScale.twenty,
    height: Screen_SIZES_ModerateScale.twenty,
  },

  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    borderRadius: Screen_SIZES_ModerateScale.twentyFour,
    paddingRight: Screen_SIZES_ModerateScale.twelve,
    paddingLeft: Screen_SIZES_ModerateScale.four,
  },

  leftIconContainer: {
    marginRight: Screen_SIZES_ModerateScale.ten,
    backgroundColor: colors.white,
    borderRadius: Screen_SIZES_Scale.twenty,
    padding: Screen_SIZES_ModerateScale.six,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: ms(40),
    color: colors.black,
  },

  rightIcon: {
    marginLeft: Screen_SIZES_ModerateScale.ten,
  },
});
