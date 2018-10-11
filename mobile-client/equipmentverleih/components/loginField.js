import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import Input from './input';
import Button from './button';


export class LoginField extends Component{
    
    constructor(){
        super();
        this.state = {
            username:"",
            password:""
        }
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
                <Button  title="Login" />
            </View>
            
        );

    }
    onChangeText = (key, value) => {
        this.setState({
          [key]: value
        })
      }

}