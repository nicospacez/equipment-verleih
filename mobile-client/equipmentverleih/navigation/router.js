
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EquipmentScreen } from '../screens/EquipmentScreen';
import { WarenkorbScreen } from '../screens/WarenkorbScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { LoginScreen } from '../screens/LoginScreen';



export const DetailNavigator = createStackNavigator({
  EquipmentScreen:{
    screen:EquipmentScreen
  },
    DetailScreen:{
      screen:DetailScreen
    }

  },
  {
    navigationOptions:{
      initialRouteName:'EquipmentScreen'
    },
    headerMode:'none'
 }
);


  export const LoginNavigator = createStackNavigator({
    LoginScreen:{
      screen:LoginScreen
    }
  },
{
  headerMode:'none',
  navigationOptions:{
    headerVisible:false
  }
});

export const TabNav = createBottomTabNavigator({
    HomeScreen:{
      screen:HomeScreen,
      navigationOptions:{
        tabBarLabel:'Home',
        tabBarIcon:({ tintColor }) => (
          <Icon name="md-home" size={24} />
        )
      }
    },
    ProfileScreen:{
      screen:ProfileScreen,
      navigationOptions:{
        tabBarLabel:"Profil",
        tabBarIcon:({ tintColor }) => (
          <Icon name="md-person" size={24} />
        )
      }
    },
    EquipmentScreen:{
      screen: DetailNavigator,
      navigationOptions:{
        tabBarLabel:"Equipment",
        tabBarIcon:({ tintColor }) => (
          <Icon name="md-camera" size={24} />
        )
      }
    },
    WarenkorbScreen:{
      screen:WarenkorbScreen,
      navigationOptions:{
        tabBarLabel:"Warenkorb",
        tabBarIcon:({ tintColor }) => (
          <Icon name="md-cart" size={24} />
        )
      }
    }
  });

  


 

