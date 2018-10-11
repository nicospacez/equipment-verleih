
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EquipmentScreen } from '../screens/EquipmentScreen';
import { WarenkorbScreen } from '../screens/WarenkorbScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ListScreen } from '../screens/ListScreen';
import { colors } from '../theme';



export const DetailNavigator = createStackNavigator({
  EquipmentScreen: {
    screen: EquipmentScreen
  },
  DetailScreen: {
    screen: DetailScreen
  }

},
  {
    navigationOptions: {
      title: 'Equipment',
      initialRouteName: 'EquipmentScreen',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.grey1
    }
  }
);

export const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  ListScreen: {
    screen:ListScreen
  }
},
  {
    navigationOptions: {
      title: 'Home',
      initialRouteName: 'HomeScreen',
      headerStyle: {
        backgroundColor: colors.white,
      },
      headerTintColor: colors.primary
    }
  }
);


export const LoginNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false
    }
  });

export const TabNav = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={24} color={tintColor} />
      )
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: "Profil",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-person" size={24} color={tintColor} />
      )
    }
  },
  EquipmentScreen: {
    screen: DetailNavigator,
    navigationOptions: {
      tabBarLabel: "Equipment",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-camera" size={24} color={tintColor} />
      )
    }
  },
  WarenkorbScreen: {
    screen: WarenkorbScreen,
    navigationOptions: {
      tabBarLabel: "Warenkorb",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-cart" size={24} color={tintColor} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: colors.primary,
      inactiveTintColor: colors.font,
      style: {
        backgroundColor: colors.white
      }
    }
  }
);






