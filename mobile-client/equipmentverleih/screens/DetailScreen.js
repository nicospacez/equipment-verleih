import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

export class DetailScreen extends Component {



    render() {

      

      return (
        <View>  
          <Button title="Abbrechen" onPress={()=> this.props.navigation.goBack()}/>
        </View>
      );
    }
  }