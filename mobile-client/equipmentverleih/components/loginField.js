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
                placeholder="User Name"
                type='username'
                onChangeText={this.onChangeText}
                value={this.state.username} /> 

                <Input
                placeholder="Password"
                type='password'
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