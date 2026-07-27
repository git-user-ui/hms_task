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

const categories = ['PopularTopic', 'General', 'Services'];

const FAQList = () => {
  const [selectedCategory, setSelectedCategory] = useState('PopularTopic');

  const filteredData = () => {
    return FAQ_DATA.filter(item => item.category === selectedCategory);
  };

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
        keyExtractor={item => item.id}
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
    marginTop: vs(20),
  },

  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  categoryButton: {
    backgroundColor: '#DCE5FF',
    borderRadius: sc(50),
    paddingHorizontal: sc(18),
    height: vs(26),
    justifyContent: 'center',
  },

  activeCategory: {
    backgroundColor: colors.primary,
  },

  categoryText: {
    color: colors.primary,

    fontSize: ms(12),

    fontWeight: '500',
  },

  activeCategoryText: {
    color: colors.white,
  },

  list: {
    paddingTop: vs(20),
    paddingBottom: vs(40),
  },
});
