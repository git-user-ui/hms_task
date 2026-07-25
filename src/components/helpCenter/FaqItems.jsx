import React, { memo, useState } from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';

import ArrowDownIcon from '../../assets/svg/ArrowDown.svg';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

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
          width={sc(18)}
          height={sc(18)}
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

export default memo(FaqItems);

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: vs(14),
  },

  header: {
    minHeight: vs(46),
    backgroundColor: '#EEF3FF',
    borderRadius: sc(50),
    paddingHorizontal: sc(18),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  question: {
    flex: 1,
    fontSize: ms(14),
    color: colors.primary,
    fontWeight: '500',
  },

  answerContainer: {
    paddingHorizontal: sc(15),
    paddingTop: vs(10),
  },

  answer: {
    color: '#808080',
    fontSize: ms(13),
    lineHeight: ms(20),
  },

  icon: {},
});
