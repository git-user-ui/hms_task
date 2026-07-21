import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProfileHeader from '../../../components/Profile/components/ProfileHeader';

const PrivacyPolicy = () => {
  return (
    <View>
      <ProfileHeader header={'Privacy Policy'} />
      <View>
        <Text>last update: 14/08/2024</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
          diam quam. Aenean in sagittis magna, ut feugiat diam. Fusce a
          scelerisque neque, sed accumsan metus. Nunc auctor tortor in dolor
          luctus, quis euismod urna tincidunt. Aenean arcu metus, bibendum at
          rhoncus at, volutpat ut lacus. Morbi pellentesque malesuada eros
          semper ultrices. Vestibulum lobortis enim vel neque auctor, a ultrices
          ex placerat. Mauris ut lacinia justo, sed suscipit tortor. Nam egestas
          nulla posuere neque tincidunt porta.
        </Text>
      </View>

      <View>
        <Text>terms & conditions</Text>
        <Text>
          1.Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
          eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
          nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
          rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
          rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus
          ac turpis.
        </Text>
        <Text>
          2. Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada
          eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex
          nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis
          rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget
          rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus.
        </Text>
        <Text>
          3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          pellentesque congue lorem, vel tincidunt tortor placerat a. Proin ac
          diam quam. Aenean in sagittis magna, ut feugiat diam. Nunc auctor
          tortor in dolor luctus, quis euismod urna tincidunt. Aenean arcu
          metus, bibendum at rhoncus at, volutpat ut lacus.
        </Text>
        <Text>
          4. Morbi pellentesque malesuada eros semper ultrices. Vestibulum
          lobortis enim vel neque auctor, a ultrices ex placerat. Mauris ut
          lacinia justo, sed suscipit tortor. Nam egestas nulla posuere neque.
        </Text>
      </View>
    </View>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
