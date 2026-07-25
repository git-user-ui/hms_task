import { StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { sc, vs } from '../../../utils/responsive';
import FAQList from '../../../components/helpCenter/FAQ';
import ContactUs from '../../../components/helpCenter/ContactUs';
import SegmentControl from './SegmentControl';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';

const HelpCenter = () => {
  const [selectedTab, setSelectedTab] = useState('faq');
  useEffect(() => {
    console.log('SearchIcon');
  }, []);

  return (
    <View style={styles.container}>
      <ProfileHeader header={'Help Center'} />
      {/* <SearchBar /> */}
      <SegmentControl value={selectedTab} onChange={setSelectedTab} />

      {selectedTab === 'faq' ? <FAQList /> : <ContactUs />}
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: sc(30),
    marginTop: vs(20),
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
