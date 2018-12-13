import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { colors, fonts, gstyles } from '../theme';
import { ListView } from '../components/listView';
import Icon from 'react-native-vector-icons/Ionicons';
import {getGeliehenList, getReserviertList} from '../services/RentalService';





export class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Icon color={colors.headerbartext} name="md-person" size={24} style={{ marginRight: 15 }} onPress={() => navigation.push('ProfileScreen')} />
    )
  })

  constructor() {
    super();
    this.state = {
      geliehenData: null,
      reserviertData: null
    }

  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData(){
    gData = getGeliehenList();
    rData = getReserviertList();
    console.log(gData);
    this.setState({
      geliehenData: gData,
      reserviertData: rData
    })
  }


  pushGeliehenListScreen() {
    this.props.navigation.push("ListScreen", { data: this.state.geliehenData });
  }
  pushReserviertListScreen() {
    this.props.navigation.push("ListScreen", { data: this.state.reserviertData });
  }

  renderGeliehen() {
    if (!this.state.geliehenData) {
      return <ActivityIndicator size="large" color={colors.primary} />
    }
    return (
      <View>
        <Text style={gstyles.title}>Geliehen</Text>
        <ListView data={this.state.geliehenData} limit={3} style={styles.listview} />
        <TouchableOpacity onPress={() => this.pushGeliehenListScreen()}><Text style={styles.mehranzeigen}>Mehr anzeigen</Text></TouchableOpacity>
      </View>
    );
  }
  renderReserviert() {
    if (!this.state.reserviertData) {
      return <ActivityIndicator size="large" color={colors.primary} />
    }
    return (
      <View>
        <Text style={gstyles.title}>Reserviert</Text>
        <ListView data={this.state.reserviertData} limit={3} style={styles.listview} />
        <TouchableOpacity onPress={() => this.pushReserviertListScreen()}><Text style={styles.mehranzeigen}>Mehr anzeigen</Text></TouchableOpacity>
      </View>
    );
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={gstyles.box}>
          {this.renderGeliehen()}
        </View>
        <View style={gstyles.box}>
          {this.renderReserviert()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%'
  },
  listbox: {
    height: '47%',
    width: '100%',
    backgroundColor: colors.white,
    marginTop: '3%',
    elevation: 1,
    padding: 10
  },
  listview: {
  },
  mehranzeigen: {
    width: '95%',
    fontSize: 16,
    textAlign: 'right',
    fontFamily: fonts.bold,
    color: colors.lightblue,
    marginTop: 0,

  },
  title: {
    fontSize: 16,
    color: colors.primary,
    padding: 10,
    paddingTop: 0
  }

});