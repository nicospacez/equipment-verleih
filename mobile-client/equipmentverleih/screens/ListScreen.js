import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ScrollView } from 'react-native';
import { colors, fonts, gstyles } from '../theme';
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
      <View style={gstyles.container}>
        <View style={gstyles.box}>
          <ScrollView>
            <ListView data={this.data} limit={400000} />
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: colors.grey1,
    padding: 10
  },
  innerbox: {
    backgroundColor: colors.white,
    elevation: 1,
    padding: 10
  }

});