import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

import { TabNav, LoginNavigator, AdminNav } from '../navigation/router';
import { retrieveLoginDataLocal, login } from '../services/RentalService';




import { colors } from '../theme';

export class StartupScreen extends Component {

    nav = null;
    constructor() {
        super();



    }

    componentDidMount() {
        this.login();
    }



    login = () => {

        setTimeout(() => {

            retrieveLoginDataLocal().then(res => {
                if(res == "nd"){
                // if (true) {
                    console.log("nd");
                    this.props.navigation.navigate("LoginScreen");
                } else {
                    console.log("d");
                    login(res.username, res.password).then(data => {
                        if (data.state == "SUCCESS") {
                            if (data.userDto.admin) {
                                this.props.navigation.navigate("AdminNav");
                            } else {
                                this.props.navigation.navigate("TabNav");
                            }
                        } else {
                            this.props.navigation.navigate("LoginScreen");
                        }
                        console.log(data);
                    })
                }
            })

        }, 1000);
    }






    render() {

        return (
            <View style={styles.splash}>
                <Image style={styles.image} source={require('../images/logo.png')} />
            </View>
        );

    }


}
const styles = StyleSheet.create({
    splash: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.grey2,
        width: '100%',
        height: '100%'
    },
    image: {

        width: '100%',
        resizeMode: 'contain'
    }

});