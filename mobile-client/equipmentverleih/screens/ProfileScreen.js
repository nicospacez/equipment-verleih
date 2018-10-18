import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profil'

  };

    render() {
      return (
        <View>  
          <Text>Profil</Text>
        </View>
      );
    }
  }