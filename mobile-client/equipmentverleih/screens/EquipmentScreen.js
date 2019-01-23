import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import { EquipmentList } from '../components/equipmentlist';
import { colors, gstyles } from '../theme';
import { DetailNavigator } from '../navigation/router';
import { DetailScreen } from './DetailScreen';

export class EquipmentScreen extends Component {

  constructor() {
    super();


    this.launchDetailScreen = this.launchDetailScreen.bind(this);
  }

  data = {

    title: "Kamera",
    texts: [
      {
        text: "Lumix GH4"
      },
      {
        text: "Nikon D3100"
      },
      {
        text: "Canon EOS 5D Mark III"
      },
      {
        text: "sick"
      },
      {
        text: "sick"
      }
    ]


  }

  launchDetailScreen() {
    this.props.navigation.navigate('DetailScreen');
  }



  render() {

    return (
      <View style={gstyles.container}>
        <View style={gstyles.box}>
          <ScrollView>
            <EquipmentList data={this.data} style={styles.equipmentList} onClick={this.launchDetailScreen} />
          </ScrollView>
        </View>
        <View style={gstyles.box}>
          <ScrollView>
            <EquipmentList data={this.data} style={styles.equipmentList} onClick={this.launchDetailScreen} />
          </ScrollView>
        </View>
      </View>
    );
  }


}



const styles = StyleSheet.create({
  equipmentList: {
    marginTop: 0,
    flex: 1,
    backgroundColor: colors.grey1

  },
  box: {
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    elevation: 2
  },
  container: {
    backgroundColor: colors.lightgrey
  },
});