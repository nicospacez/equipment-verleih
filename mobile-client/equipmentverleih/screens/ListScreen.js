import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { colors, fonts } from '../theme';
import { ListView } from '../components/listView';





export class ListScreen extends Component {


  static navigationOptions = {
    title: 'Liste'

  };

  data = this.props.navigation.getParam("data");

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.innerbox}>
        <ListView data={this.data} limit={400000} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    backgroundColor: colors.grey1,
    padding:10
  },
  innerbox:{
    backgroundColor:colors.white,
    elevation:1,
    padding:10
  }

});