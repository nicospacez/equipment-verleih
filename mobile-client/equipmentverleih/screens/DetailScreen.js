import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../theme';
import { DetailLabel }  from '../components/detailLabel';




export class DetailScreen extends Component {

  static navigationOptions = {
    title: 'Details'

  };

  render() {



    return (
      <ScrollView>
      <View style={styles.imgbox}>
      <Image style={styles.img}source={require('../images/logo_text.png')} />
    </View>
        <View style={styles.bodybox}>
        
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  scrollView: {
    padding: 15
  },
  img:{
    height:200,
    resizeMode:'contain',
    
  },
  imgbox:{
    width:'100%',
    alignItems:'center'
  },
  headbox: {
    flex: 1,
    height: 250,
    backgroundColor: colors.green
  },
  bodybox: {
    
    flex:1,
    margin:10,
    backgroundColor: colors.white,
    elevation:2,
    padding:10
  }
});