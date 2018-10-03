import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { LoginField } from '../components/loginField';
import { colors } from '../theme';


export class LoginScreen extends Component {
    render() {
      return (
        
        <View style={styles.container}>  
        
       
         
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
      marginBottom:20,
      fontSize:80
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