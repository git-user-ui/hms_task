import Toast from 'react-native-toast-message';

export const showToast = ({
  type = 'success',
  message,
  position = 'bottom',
}) => {
  Toast.show({
    type,
    text1: message,
    position,
    swipeable: true,
    animationConfig: {
      type: 'spring',
      friction: 6,
      tension: 40,
    },
  });
};
