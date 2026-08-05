import React, { useState } from 'react';
import {
  LayoutAnimation,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ArrowDownIcon from '../../assets/svg/ArrowDown.svg';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const FaqItems = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.header}
        onPress={onToggle}
      >
        <Text style={styles.question}>{item.question}</Text>

        <ArrowDownIcon
          width={Screen_SIZES_Scale.twelve}
          height={Screen_SIZES_Scale.twelve}
          style={[
            styles.icon,
            {
              transform: [
                {
                  rotate: expanded ? '180deg' : '0deg',
                },
              ],
            },
          ]}
        />
      </TouchableOpacity>

      {expanded && (
        <View style={styles.answerContainer}>
          <Text style={styles.answer}>{item.answer}</Text>
        </View>
      )}
    </View>
  );
};

export default FaqItems;

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: Screen_SIZES_VerticalScale.fourteen,
  },

  header: {
    minHeight: vs(46),
    backgroundColor: '#EEF3FF',
    borderRadius: sc(50),
    paddingHorizontal: Screen_SIZES_Scale.eighteen,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  question: {
    flex: 1,
    fontSize: Screen_SIZES_ModerateScale.fourteen,
    color: colors.primary,
    fontWeight: '500',
  },

  answerContainer: {
    paddingHorizontal: Screen_SIZES_Scale.sixteen,
    paddingTop: Screen_SIZES_VerticalScale.ten,
  },

  answer: {
    color: '#808080',
    fontSize: Screen_SIZES_ModerateScale.twelve,
    lineHeight: Screen_SIZES_ModerateScale.twenty,
  },

  icon: {},
});
