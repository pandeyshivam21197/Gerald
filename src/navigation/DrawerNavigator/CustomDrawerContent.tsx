import React, {FC} from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationScreenNames} from '../contants';
import {StyleSheet, ViewStyle} from 'react-native';
import {StyleProp} from 'react-native';
import Animated from 'react-native-reanimated';

interface IProps extends DrawerContentComponentProps {
  drawerCustomContentAnimatedStyle: StyleProp<ViewStyle>;
}

export const CustomDrawerContent: FC<IProps> = props => {
  const {navigation, drawerCustomContentAnimatedStyle} = props;

  return (
    <Animated.View style={[drawerCustomContentAnimatedStyle, styles.container]}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.drawerContainer}>
        <DrawerItem
          focused
          label={NavigationScreenNames.Screen1}
          onPress={() => {
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.HomeStack,
              params: {screen: NavigationScreenNames.Screen1},
            });
          }}
          style={styles.drawerItem}
        />
        <DrawerItem
          focused
          label={NavigationScreenNames.Screen2}
          onPress={() =>
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.HomeStack,
              params: {screen: NavigationScreenNames.Screen2},
            })
          }
          style={styles.drawerItem}
        />
        <DrawerItem
          focused
          label={NavigationScreenNames.ContactScreen}
          onPress={() =>
            navigation.navigate(NavigationScreenNames.BottomTab, {
              screen: NavigationScreenNames.ContactStack,
            })
          }
          style={styles.drawerItem}
        />
      </DrawerContentScrollView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#220E2F',
  },
  drawerItem: {
    width: '100%',
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
  },
});
