import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {BottomTabNavigator} from '../BottomTabNavigator';
import {NavigationScreenNames} from '../contants';
import {CustomDrawerContent} from './CustomDrawerContent';
import {width} from '../../utils/screenDimension';
import {TouchableOpacity} from 'react-native';
import Icon from '../../components/Icon';
import userNavigationAnimation from './userNavigationAnimation';
import Animated from 'react-native-reanimated';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export const DrawerNavigator = props => {
  const {navigation} = props;
  const {animatedStyle, onShowDrawer} = userNavigationAnimation();

  return (
    <Drawer.Navigator
      backBehavior="none"
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerType: 'back', // 'permanent'
        swipeEnabled: false,
        overlayColor: 'transparent',
        drawerStyle: {width: '50%', zIndex: -1},
        headerTitle: '',

        sceneStyle: {
          zIndex: 1000,
          backgroundColor: 'red',
          position: 'relative',
        },
        // headerLeft: ({navigation}) => (
        //   <TouchableOpacity
        //     onPress={() => {
        //       onShowDrawer();
        //     }}>
        //     <Icon name="home" size={24} color="black" />
        //   </TouchableOpacity>
        // ),
      }}>
      <Drawer.Screen name={NavigationScreenNames.BottomTab}>
        {props => {
          return (
            <Animated.View style={[animatedStyle, {flex: 1}]}>
              <BottomTabNavigator />
            </Animated.View>
          );
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
