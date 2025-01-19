import React from 'react';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {NavigationScreenNames} from '../contants';
import {StyleSheet} from 'react-native';

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.drawerContainer}>
      <DrawerItem
        focused
        label={NavigationScreenNames.Screen1}
        onPress={() => {
          console.log('cing her$$$$');
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
  );
};

const styles = StyleSheet.create({
  drawerItem: {
    width: '35%',
  },
  drawerContainer: {
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    backgroundColor: '#220E2F',
  },
});
