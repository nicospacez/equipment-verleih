import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native';

import { TabNavigator, LoginNavigator } from '../navigation/router';

import  LoginService  from '../services/AuthService';

export class StartupScreen extends Component {

    constructor(){
        super();
        this.state = {
            isLoggedIn:null
        };

        ls = new LoginService();
        ls.checkLogin();
    }
    loginSubscriber = function(msg,data){      
        console.log(data);
        
        setTimeout(() => {
            console.log('wow');
            this.setState({isLoggedIn:data.isLoggedIn});
            PubSub.unsubscribe(this.token);
        },0);
     }.bind(this);

     token = PubSub.subscribe('checkLogin',this.loginSubscriber);

    render() {
        
      switch(this.state.isLoggedIn){
        case true:
            return <TabNavigator />;
        case false:
            return <LoginNavigator />;
        default:
            return (
            <View style={styles.splash}>    
                <Text style={styles.splashtext}>EQUIPMENT VERLEIH</Text>
            </View>
        );
      }      
    }
    
  }
  const styles = StyleSheet.create({
      splash:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#7371fc'
      },
      splashtext:{
        
        fontSize:40,
        color:'#011627'
      }
    
});