import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default () => {
  const progress = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -10]);
    const translateX = interpolate(progress.value, [0, 1], [0, 40]);
    const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

    return {
      // transform: [{rotate: `${rotate}deg`}, {translateX}, {scale}],
      transform: [{scale}],
    };
  });

  const onShowDrawer = () => {
    progress.value = withTiming(1, {duration: 500});
  };

  const onHideDrawer = () => {
    progress.value = withTiming(0, {duration: 500});
  };

  return {animatedStyle, onShowDrawer, onHideDrawer};
};
