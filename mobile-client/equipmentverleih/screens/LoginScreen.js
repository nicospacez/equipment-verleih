import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { LoginField } from '../components/loginField';
import { colors } from '../theme';


export class LoginScreen extends Component {
    render() {
      return (
        
        <View style={styles.container}>  
        
       
         
              <Image source={require('../images/logo_text.png')} style={styles.logo} />
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
      width:'100%',
      height:'100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:colors.lightblue
    },
    logincontainer:{
      padding:20,
      width:'80%',
      justifyContent:'center',
      backgroundColor:'rgba(255,255,255,0)'
    },
    logintext:{
      textAlign:'center',
      fontSize:16,
      color:'white'
    },
    logo:{
      height:'50%',
      resizeMode:'contain'
    },
    bgImage:{
      position:'absolute',
      flex:1,
      width:'100%',
      height:'100%',
      top:0, 
      resizeMode: 'cover',
      zIndex:-1
    }
  });