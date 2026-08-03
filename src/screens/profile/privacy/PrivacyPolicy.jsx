import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { colors } from '../../../themes/colors';
import { ms, sc, vs } from '../../../utils/responsive';
import { Fonts } from '../../../themes/font';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../../constants/screen';

const terms = [
  'Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus ac turpis.',

  'Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus.',

  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac diam quam. Aenean in sagittis magna, ut feugiat diam.',

  'Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi pellentesque malesuada eros semper ultrices. Vestibulum lobortis enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque.',
];

const PrivacyPolicy = () => {
  return (
    <View>
      <ProfileHeader header={'Privacy Policy'} />
      <View style={styles.container}>
        <Text style={styles.updatetext}>last update: 24/06/2024</Text>
        <View style={styles.privacyDesc}>
          <Text style={styles.privacyText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
            scelerisque neque, sed accumsan metus.
          </Text>
          <Text style={styles.privacyText}>
            Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
            Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
            pellentesque malesuada eros semper ultrices. Vestibulum lobortis
            enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia
            justo, sed suscipit tortor. Nam egestas nulla posuere neque
            tincidunt porta.
          </Text>
        </View>
        <View style={styles.terms}>
          <Text style={styles.termsHeading}>Terms & Conditions</Text>

          {terms.map((item, index) => (
            <View key={index} style={styles.termRow}>
              <Text style={styles.termNumber}>{index + 1}.</Text>

              <Text style={styles.termContent}>{item}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    fontFamily: Fonts.ExtraLight,
    paddingTop: Screen_SIZES_VerticalScale.twenty,
    paddingHorizontal: Screen_SIZES_ModerateScale.thirty,
  },
  updatetext: {
    color: colors.secondary,
    fontSize: Screen_SIZES_Scale.twelve,
    fontWeight: '500',
  },
  privacyDesc: {
    paddingTop: vs(5),
    gap: Screen_SIZES_Scale.ten,
  },
  privacyText: {
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontFamily: Fonts.ExtraLight,
    fontWeight: '200',
    color: colors.black,
  },
  terms: {
    gap: Screen_SIZES_Scale.six,
  },
  termsHeading: {
    color: colors.primary,
    fontSize: Screen_SIZES_Scale.twenty,
    fontFamily: Fonts.Medium,
    fontWeight: '500',
    paddingTop: Screen_SIZES_VerticalScale.sixteen,
  },
  termRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  termNumber: {
    width: Screen_SIZES_ModerateScale.eighteen,
  },

  termContent: {
    flex: 1,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    fontFamily: Fonts.ExtraLight,
    fontWeight: '200',
  },
});
