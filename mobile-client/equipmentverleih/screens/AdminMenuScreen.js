import React, { Component } from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih } from '../services/RentalService';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { AddProductForm } from '../components/addProductForm';

export class AdminMenuScreen extends Component {

    static navigationOptions = {
        title: 'Menü'
    };





    constructor(props) {
        super(props)


    }

    componentDidMount() {

    }

    launchAddProductScreen(){
        this.props.navigation.push('AddProductScreen');
    }

    render() {



        return (
            <View style={gstyles.container}>
            <View style={gstyles.box}>
                <View  style={styles.btn1}><Button bgcolor={colors.primary} textcolor={colors.white} onPress={()=>this.launchAddProductScreen()} title="Produkt hinzufügen"/></View>
                <View  style={styles.btn1}><Button style={styles.btn} bgcolor={colors.primary} textcolor={colors.white} title="Kategorie hinzufügen"/></View>
                <View  style={styles.btn1}><Button style={styles.btn} bgcolor={colors.primary} textcolor={colors.white} title="Produkt löschen"/></View>
                <View  style={styles.btn1}><Button style={styles.btn} bgcolor={colors.primary} textcolor={colors.white} title="Kategorie löschen"/></View>
                
            </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%'
    },
    btn1:{
        marginVertical:10,
        width:'100%'
    }

});