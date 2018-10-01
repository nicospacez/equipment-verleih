import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert,Image} from 'react-native';
import { LoginField } from '../components/loginField';
import { colors } from '../theme';

export class LoginScreen extends Component {
    render() {
      return (
        <View style={styles.container}>  
        <Image source={require('../images/loginwp.jpg')} style={{width: '100%', height: '100%',position:'absolute'}} />
        <Text style={styles.logo}>LOGO</Text>
          <View style={styles.logincontainer}>
          
            <LoginField />
            <Text style={styles.logintext}>Melde dich an um das Verleihsystem der HTL Leonding verwenden zu können. </Text>
          </View>
   
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:colors.lightgrey
    },
    logincontainer:{
      padding:20,
      width:'80%',
      justifyContent:'center',
      backgroundColor:'rgba(255,255,255,0)'
    },
    logintext:{
      fontSize:15,
      marginBottom:0,
      marginTop:60
    },
    logo:{
      marginBottom:50,
      fontSize:80
    }
  });