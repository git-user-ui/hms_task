import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { ms, sc, vs } from '../../../utils/responsive';
import FAQList from '../../../components/helpCenter/FAQ';
import ContactUs from '../../../components/helpCenter/ContactUs';
import SegmentControl from './SegmentControl';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { colors } from '../../../themes/colors';
import { Fonts } from '../../../themes/font';

const HelpCenter = () => {
  const [selectedTab, setSelectedTab] = useState('faq');

  return (
    <>
      <View style={styles.headerContainer}>
        <ProfileHeader header={'Help Center'} whiteArrow={true} />
        <Text style={styles.txt}>how can we help you?</Text>
        <TextInput placeholder="Search..." style={styles.inputContainer} />
      </View>
      <View style={styles.container}>
        {/* <SearchBar /> */}
        <SegmentControl value={selectedTab} onChange={setSelectedTab} />

        {selectedTab === 'faq' ? <FAQList /> : <ContactUs />}
      </View>
    </>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  headerContainer: {
    gap: 10,
    backgroundColor: colors.primary,
    colors: colors.white,
    paddingBottom: Screen_SIZES_VerticalScale.twenty,
  },
  txt: {
    fontFamily: Fonts.Regular,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.white,
    marginHorizontal: Screen_SIZES_Scale.thirty,
    borderRadius: Screen_SIZES_ModerateScale.thirty,
    paddingHorizontal: Screen_SIZES_ModerateScale.thirty,
  },
  container: {
    flex: 1,
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_VerticalScale.ten,
  },
  text: {
    textAlign: 'center',
  },
  searchIcon: {
    position: 'absolute',
    top: sc(45),
    left: Screen_SIZES_Scale.twelve,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: sc(50),
    paddingHorizontal: Screen_SIZES_Scale.thirty,
    marginTop: Screen_SIZES_Scale.twenty,
  },
});
