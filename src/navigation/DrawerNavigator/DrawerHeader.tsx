import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {DrawerHeaderProps} from '@react-navigation/drawer';
import Icon from '../../components/Icon';
import Animated from 'react-native-reanimated';

interface IProps extends DrawerHeaderProps {
  animatedStyle?: StyleProp<ViewStyle>;
}

export const DrawerHeader: FC<IProps> = props => {
  const {navigation, animatedStyle} = props;

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <View {...props}>
        <Icon
          name="menu"
          size={30}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: 'white',
  },
});
