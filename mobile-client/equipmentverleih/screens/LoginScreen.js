import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';
import { LoginField } from '../components/loginField';
import { colors } from '../theme';
import {retrieveLoginDataLocal} from '../services/RentalService';


export class LoginScreen extends Component {


  constructor(props) {
    super(props);
    
    this.state = {
      data: null
    }

  }

  componentDidMount(){
    
  }


  loginReturn = (data) => {
    
    if(data.state == "SUCCESS"){
      if(data.userDto.admin){
        this.props.navigation.navigate("AdminNav");
      }else{
        this.props.navigation.navigate("TabNav");
      }
    }

    this.setState({
      data: data
    });
  }

  render() {
    return (

      <View style={styles.container}>

        <View style={styles.topBox}>

          <Image source={require('../images/logo.png')} style={styles.logo} />
        </View>
        <View style={styles.logincontainer}>
          {this.renderErrorMessage()}
          <LoginField loginReturn={this.loginReturn} />

          <Text style={styles.logintext}>Melde dich an um das Verleihsystem der HTL Leonding verwenden zu können. </Text>
        </View>

      </View>

    );
  }

  renderErrorMessage() {
  
    if (this.state.data) {
      
      if (this.state.data.state == "SUCCESS") {
        return <View></View>
      } else {
        return (<Text style={{color:colors.red, textAlign:'center'}}>{this.state.data.error}</Text>)
      }
    }
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  topBox: {
    backgroundColor: colors.primary,
    height: '40%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logincontainer: {
   
    padding: 20,
    width: '100%',
    justifyContent: 'center',
    elevation: 5
  },
  logintext: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.grey1
  },
  logo: {
    height: '70%',
    resizeMode: 'contain'
  },
  bgImage: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    resizeMode: 'cover',
    zIndex: -1
  }
});