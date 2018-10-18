import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';
import { ListView } from '../components/listView';
import Icon from 'react-native-vector-icons/Ionicons';





export class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    headerRight: (
      <Icon name="md-person" size={24} style={{ marginRight:15 }} onPress={() => navigation.navigate('ProfileScreen')} />
    )
  })

  constructor() {
    super();

  }

  data = {
    head: ["Name", "Kürzel", "Status"],
    body: [
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      },
      {
        name: "Lumix GH4",
        kuerzel: "K01",
        status: "25.01.2018"
      }
    ]
  }



  pushListScreen() {
    this.props.navigation.push("ListScreen", { data: this.data });
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.listbox}>
        <Text style={styles.title}>Geliehen</Text>
          <ListView data={this.data} limit={3} style={styles.listview} />
          <TouchableOpacity onPress={() => this.pushListScreen()}><Text style={styles.mehranzeigen}>Mehr anzeigen</Text></TouchableOpacity>
        </View>
        <View style={styles.listbox}>
        <Text style={styles.title}>Reserviert</Text>
          <ListView data={this.data} limit={3} style={styles.listview} />
          <TouchableOpacity onPress={() => this.pushListScreen()}><Text style={styles.mehranzeigen}>Mehr anzeigen</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey1,
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
  title:{
    fontSize:16,
    color:colors.primary,
    padding:10,
    paddingTop:0
  }

});