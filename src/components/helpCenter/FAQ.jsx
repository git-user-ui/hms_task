import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { ms, sc, vs } from '../../utils/responsive';
import { colors } from '../../themes/colors';

import FaqItems from './FaqItems';
import { FAQ_DATA } from '../../utils/faqData';
import {
  Screen_SIZES_ModerateScale,
  Screen_SIZES_Scale,
  Screen_SIZES_VerticalScale,
} from '../../constants/screen';

const categories = ['PopularTopic', 'General', 'Services'];

const FAQList = () => {
  const [selectedCategory, setSelectedCategory] = useState('PopularTopic');

  const filteredData = FAQ_DATA.filter(
    item => item.category === selectedCategory,
  );

  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        {categories.map(category => {
          const active = selectedCategory === category;

          return (
            <TouchableOpacity
              key={category}
              activeOpacity={0.8}
              onPress={() => setSelectedCategory(category)}
              style={[styles.categoryButton, active && styles.activeCategory]}
            >
              <Text
                style={[
                  styles.categoryText,
                  active && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={filteredData}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <FaqItems item={item} />}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default FAQList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Screen_SIZES_VerticalScale.twenty,
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryButton: {
    backgroundColor: '#DCE5FF',
    borderRadius: sc(50),
    paddingHorizontal: Screen_SIZES_Scale.eighteen,
    height: Screen_SIZES_VerticalScale.twentySix,
    justifyContent: 'center',
  },

  activeCategory: {
    backgroundColor: colors.primary,
  },

  categoryText: {
    color: colors.primary,

    fontSize: Screen_SIZES_ModerateScale.twelve,

    fontWeight: '500',
  },

  activeCategoryText: {
    color: colors.white,
  },

  list: {
    paddingTop: Screen_SIZES_VerticalScale.twenty,
    paddingBottom: vs(40),
  },
});
