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
    paddingBottom: vs(20),
  },
  txt: {
    fontFamily: Fonts.Regular,
    fontSize: ms(14),
    fontWeight: '400',
    textAlign: 'center',
    color: colors.white,
  },
  inputContainer: {
    backgroundColor: colors.white,
    marginHorizontal: sc(30),
    borderRadius: ms(30),
    paddingHorizontal: ms(30),
  },
  container: {
    flex: 1,
    paddingHorizontal: sc(30),
    marginTop: vs(10),
  },
  text: {
    textAlign: 'center',
  },
  searchIcon: {
    position: 'absolute',
    top: sc(45),
    left: sc(12),
  },
  textInput: {
    borderWidth: 1,
    borderRadius: sc(50),
    paddingHorizontal: sc(30),
    marginTop: sc(20),
  },
});
