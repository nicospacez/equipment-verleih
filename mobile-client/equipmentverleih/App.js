/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { EquipmentScreen } from './screens/EquipmentScreen';
import { WarenkorbScreen } from './screens/WarenkorbScreen';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default createBottomTabNavigator({
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
    screen:EquipmentScreen,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
