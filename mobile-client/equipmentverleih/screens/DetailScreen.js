import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../theme';


export class DetailScreen extends Component {

  static navigationOptions = {
    title: 'Details'

  };

  render() {



    return (
      <View style={styles.container}>
        <Image style={styles.productImage} source={require('../images/logo_text.png')} />
        <ScrollView style={styles.scrollView}>
          <Text>asdfasf</Text>
          <Text>asdfasf</Text>
          <Text>asdfasf</Text>
          <Text>asdfasf</Text>
          <Text>asdfasf</Text>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    alignItems: 'center',
    backgroundColor:colors.secondary
  },
  productImage: {
    height: 200,
    width:'100%',
    resizeMode: 'contain',
    backgroundColor:colors.grey1
  },
  scrollView:{
    padding: 15
  }
});