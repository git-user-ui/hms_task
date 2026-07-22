import { StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect } from 'react';
import SearchIcon from '../../../assets/svg/SearchIcon.svg';
import { sc } from '../../../utils/responsive';
import { colors } from '../../../themes/colors';

const HelpCenter = () => {
  useEffect(() => {
    console.log(SearchIcon);
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>How Can we Help You?</Text>
        <View>
          <SearchIcon style={styles.searchIcon} />
          <TextInput
            placeholder="Search..."
            style={styles.textInput}
            placeholderTextColor={colors.secondary}
          />
        </View>
      </View>
    </View>
  );
};

export default HelpCenter;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sc(30),
  },
  text: {
    textAlign: 'center',
  },
  searchIcon: {
    position: '0absolute',
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
