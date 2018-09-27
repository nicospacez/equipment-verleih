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
        this.setState({isLoggedIn:data.isLoggedIn});
        PubSub.unsubscribe(this.token);
        console.log(data);
     }.bind(this);

     token = PubSub.subscribe('checkLogin',this.loginSubscriber);

    render() {
        
      switch(this.state.isLoggedIn){
        case true:
            return <TabNavigator />;
        case false:
            return <LoginNavigator />;
        default:
            return <Text>asdf</Text>
      }      
    }
    
    
    
    
      

    
  }