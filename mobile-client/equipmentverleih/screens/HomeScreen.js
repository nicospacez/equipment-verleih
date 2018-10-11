import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';
import { ListView } from '../components/listView';





export class HomeScreen extends Component {

  constructor(){
    super();
    
  }

  data = {
    head:["Name","Kürzel","Status"],
    body:[
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      },
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      },
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      },
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      },
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      },
      {
        name:"Lumix GH4",
        kuerzel:"K01",
        status:"25.01.2018"
      }
    ]
  }

  pushListScreen(){
    this.props.navigation.push("ListScreen", {data:this.data} );
  }

  render() {
    return (
      
      <View style={styles.container}>
        <View style={styles.listbox}>
          <ListView data={this.data} limit={3} style={styles.listview}/>
          <TouchableOpacity onPress={()=>this.pushListScreen()}><Text style={styles.mehranzeigen}>Mehr anzeigen</Text></TouchableOpacity>
        </View>
        <View style={styles.listbox}>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container:{
    padding:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:colors.grey1,
    height:'100%',
    width:'100%'
  },
  listbox:{
    height:'47%',
    width:'100%',
    backgroundColor:colors.white,
    marginTop:'3%',
    elevation:1,
    padding:10
  },
  listview:{
  },
  mehranzeigen:{
    width:'95%',
    fontSize:16,
    textAlign:'right',
    fontFamily:fonts.bold,
    color:colors.lightblue,
    marginTop:15,
    
  }

});