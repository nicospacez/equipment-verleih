/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { TabNavigator, LoginNavigator } from './navigation/router';
import { StartupScreen } from './screens/StartupScreen';
import  LoginService  from './services/AuthService';

import PubSub from 'pubsub-js';



class App extends Component{
  token = null;

  constructor(){
    super();
  }

  render(){
     
    return <StartupScreen />;
      
  }
}

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

export default App;