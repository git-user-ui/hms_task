import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text } from 'react-native';

const colors = {
  success: '#12883d',
  error: '#EF4444',
  info: '#3B82F6',
};

export default function ShowToast({
  visible,
  message,
  type = 'info',
  duration = 2000,
  onHide,
}) {
  const translateX = useRef(new Animated.Value(-250)).current;

  useEffect(() => {
    if (!visible) return;

    // Reset position before every show
    translateX.setValue(-250);

    Animated.sequence([
      Animated.timing(translateX, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),

      Animated.delay(duration),

      Animated.timing(translateX, {
        toValue: -250,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onHide?.();
    });
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: colors[type],
          transform: [{ translateX }],
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: -110,
    position: 'absolute',
    alignSelf: 'center',
    minWidth: 220,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
