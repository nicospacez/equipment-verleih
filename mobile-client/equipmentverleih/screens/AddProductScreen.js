import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih } from '../services/RentalService';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';
import { AddProductForm } from '../components/addProductForm';

export class AddProductScreen extends Component {

    static navigationOptions = {
        title: 'Produkt hinzufügen'
    };





    constructor(props) {
        super(props)


    }

    componentDidMount() {

    }

    render() {



        return (
            <View style={gstyles.box}>
                
                <AddProductForm></AddProductForm>
                
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
    }

});