import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';
import { colors } from '../../../themes/colors';
import { currentDate, ms, sc, vs } from '../../../utils/responsive';

const PrivacyPolicy = () => {
  return (
    <View>
      <ProfileHeader header={'Privacy Policy'} />
      <View style={styles.container}>
        <Text style={styles.updatetext}>last update: 24/06/2024</Text>
        <View style={styles.privacyDesc}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
            scelerisque neque, sed accumsan metus.
          </Text>
          <Text>
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
          <Text style={{ paddingLeft: 5 }}>
            1.Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus ac turpis.
          </Text>
          <Text>
            2. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
            eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
            nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
            rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
            rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi
            tellus.
          </Text>
          <Text>
            3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
            diam quam. Aenean in sagittis magna, ut feugiat diam.
          </Text>
          <Text>
            4. Nunc auctor tortor in dolor luctus, quis euismod urna tincidunt.
            Aenean arcu metus, bibendum at rhoncus at, volutpat ut lacus. Morbi
            pellentesque malesuada eros semper ultrices. Vestibulum lobortis
            enim vel neque auctor, a ultrices ex placerat. Mauris ut lacinia
            justo, sed suscipit tortor. Nam egestas nulla posuere neque.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    paddingTop: vs(20),
    paddingHorizontal: ms(30),
  },
  updatetext: {
    color: colors.secondary,
    fontSize: sc(12),
    fontWeight: '500',
  },
  privacyDesc: {
    paddingTop: vs(5),
    gap: sc(10),
  },
  terms: {
    gap: sc(6),
  },
  termsHeading: {
    color: colors.primary,
    fontSize: sc(20),
    fontWeight: '500',
    paddingTop: vs(16),
  },
});
