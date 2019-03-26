import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import Input from './input';
import Button from './button';
import { colors } from '../theme';

import {login} from '../services/RentalService';


export class LoginField extends Component{
    
    constructor(){
        super();
        this.state = {
            username:"admin",
            password:"admin"
        }
    }

    onPressLogin = () => {
        console.log(this.state.username);
        login(this.state.username, this.state.password).then(res => {
            this.props.loginReturn(res);
        })
    }

    render(){

        return(
            <View>
                <Input
                placeholder="Username"
                type='username'
                name='user'
                onChangeText={this.onChangeText}
                value={this.state.username} /> 

                <Input
                placeholder="Password"
                type='password'
                name='lock'
                onChangeText={this.onChangeText}
                value={this.state.password}
                secureTextEntry
                />
                <Button onPress={()=>this.onPressLogin()} title="Login" textcolor={colors.grey1} bgcolor={colors.primary}/>
            </View>
            
        );

    }
    onChangeText = (key, value) => {
        this.setState({
          [key]: value
        })
      }

}