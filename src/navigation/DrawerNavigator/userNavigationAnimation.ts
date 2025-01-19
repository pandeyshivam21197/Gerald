import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default () => {
  const progress = useSharedValue(0);

  const drawerSceneAnimatedStyle = useAnimatedStyle(() => {
    const rotate = interpolate(progress.value, [0, 1], [0, -10]);
    const translateX = interpolate(progress.value, [0, 1], [0, 80]);
    const borderRadius = interpolate(progress.value, [0, 1], [0, 40]);

    return {
      // transform: [{rotate: `${rotate}deg`}, {translateX}],
      transform: [{rotate: `${rotate}deg`}, {translateX}],
      // borderTopRightRadius: borderRadius,
      // borderTopLeftRadius: borderRadius,
      borderRadius: borderRadius,
      // transform: [{scale}],
    };
  });

  const drawerNavigatorStyle = useAnimatedStyle(() => {
    const marginTop = interpolate(progress.value, [0, 1], [0, 40]);
    // const translateX = interpolate(progress.value, [0, 1], [0, 80]);

    return {
      marginTop: marginTop,
      // transform: [{scale}],
    };
  });

  const onShowDrawer = () => {
    progress.value = withTiming(1, {duration: 500});
  };

  const onHideDrawer = () => {
    progress.value = withTiming(0, {duration: 500});
  };

  const drawerHeaderAnimatedStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(progress.value, [0, 1], [0, 40]);

    return {
      borderTopRightRadius: borderRadius,
      borderTopLeftRadius: borderRadius,
    };
  });

  const drawerCustomContentAnimatedStyle = useAnimatedStyle(() => {
    const borderRadius = interpolate(progress.value, [0, 1], [0, 40]);

    return {
      borderTopLeftRadius: borderRadius,
    };
  });

  return {
    drawerSceneAnimatedStyle,
    drawerNavigatorStyle,
    drawerHeaderAnimatedStyle,
    drawerCustomContentAnimatedStyle,
    onShowDrawer,
    onHideDrawer,
  };
};
