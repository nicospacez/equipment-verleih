import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, ActivityIndicator } from 'react-native';
import { getWarenkorbList } from '../services/RentalService';
import { colors } from '../theme';
import { WarenkorbList } from '../components/warenkorblist';


export class WarenkorbScreen extends Component {
  static navigationOptions = {
    title: 'Warenkorb'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    data = getWarenkorbList();
    this.setState({
      data: data
    });
  }

  render() {
    if (!this.state.data) {
      return <ActivityIndicator size="large" color={colors.primary} />
    }
    return (
      <View>
        <View style={styles.container}>
          <WarenkorbList data={this.state.data} limit={3000} />
          </View>
        </View >
      );
  }
}

const styles = StyleSheet.create({
  container:{
    margin:10,
    padding:10,
    backgroundColor:colors.white,
    elevation:2
  }
});