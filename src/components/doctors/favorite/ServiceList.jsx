import React, { memo, useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Heart from '../../../assets/svg/white_heart.svg';
import Chevron from '../../../assets/svg/ArrowDown.svg';

import { colors } from '../../../themes/colors';

const ServicesList = () => {
  const [expanded, setExpanded] = useState(1);

  const services = useMemo(
    () => [
      {
        id: 1,
        title: 'Dermato-Endocrinology',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pellentesque...',
      },
      {
        id: 2,
        title: 'Cosmetic Bioengineering',
        description: '',
      },
      {
        id: 3,
        title: 'Dermato-Genetics',
        description: '',
      },
      {
        id: 4,
        title: 'Solar Dermatology',
        description: '',
      },
      {
        id: 5,
        title: 'Dermato-Endocrinology',
        description: '',
      },
    ],
    [],
  );

  const toggleSection = useCallback(id => {
    setExpanded(prev => (prev === id ? null : id));
  }, []);

  return (
    <View style={styles.container}>
      {services.map(item => {
        const isExpanded = expanded === item.id;

        return (
          <View key={item.id}>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.header}
              onPress={() => toggleSection(item.id)}
            >
              <Heart width={18} />

              <Text style={styles.title}>{item.title}</Text>

              <Chevron
                style={{
                  transform: [
                    {
                      rotate: isExpanded ? '180deg' : '0deg',
                    },
                  ],
                }}
              />
            </TouchableOpacity>

            {isExpanded && (
              <View style={styles.content}>
                {!!item.description && (
                  <Text style={styles.desc}>{item.description}</Text>
                )}

                <TouchableOpacity activeOpacity={0.8} style={styles.searchBtn}>
                  <Text style={styles.searchText}>Looking Doctors</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
};

export default memo(ServicesList);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    height: 52,
    backgroundColor: colors.primary,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    marginBottom: 16,
  },

  title: {
    flex: 1,
    color: colors.white,
    marginLeft: 10,
    fontWeight: '600',
    fontSize: 15,
  },

  content: {
    backgroundColor: colors.secondary,
    borderRadius: 18,
    padding: 16,
    marginTop: -8,
    marginBottom: 18,
  },

  desc: {
    color: colors.black,
    lineHeight: 20,
  },

  searchBtn: {
    marginTop: 18,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchText: {
    color: colors.primary,
    fontWeight: '600',
  },
});
