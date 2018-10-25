import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

import { TabNav, LoginNavigator } from '../navigation/router';

import LoginService from '../services/AuthService';
import { colors } from '../theme';

export class StartupScreen extends Component {

    nav = null;
    constructor() {
      super();
     
      ls = new LoginService();
      ls.checkLogin();
    }
   
    

    loginSubscriber = function (msg, data) {
      console.log(data);
  
      setTimeout(() => {
        
        if(data.isLoggedIn){
            this.props.navigation.navigate("TabNav");
        }else{
            this.props.navigation.navigate("LoginScreen");
        }
        PubSub.unsubscribe(this.token);
      }, 0);
    }.bind(this);
  
    token = PubSub.subscribe('checkLogin', this.loginSubscriber);
    

    

    render() {

        return (
            <View style={styles.splash}>
                <Image style={styles.image} source={require('../images/logo_text.png')} />
            </View>
        );

    }


}
const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey2
    },
    image: {

        width: '60%',
        resizeMode: 'contain'
    }

});