import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';
import { EquipmentList } from '../components/equipmentlist';
import { colors } from '../theme';

export class EquipmentScreen extends Component {

  data = {

      title: "Kamera",
      texts:[
        {
          text:"Lumix GH4"
        },
        {
          text:"Nikon D3100"
        },
        {
          text:"Canon EOS 5D Mark III"
        },
        {
          text:"sick"
        },
        {
          text:"sick"
        }
      ]
    

  }



  render() {
    return (
      <ScrollView style={styles.container}>

        <EquipmentList data={this.data} title={this.title} style={styles.equipmentList} />
        <EquipmentList data={this.data} style={styles.equipmentList} />
        <EquipmentList data={this.data} style={styles.equipmentList} />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  equipmentList: {
    marginTop: 20,

  },
  container: {
    padding: 10,
    backgroundColor: colors.lightgrey
  },
});