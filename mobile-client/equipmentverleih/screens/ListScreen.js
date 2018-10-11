import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';
import { ListView } from '../components/listView';





export class ListScreen extends Component {

   

    static navigationOptions = {
        title: 'Liste'
    
      };

      data = this.props.navigation.getParam("data");

  constructor(props){
    super(props);

   
    
  }

  

  

  render() {
    return (
      <ListView data={this.data} limit={400000} />
    );
  }
}

const styles = StyleSheet.create({

  

});