import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors, gstyles } from '../theme';


export class AddProductForm extends Component {

    state={
        marke:null,
        bezeichnung:null,
        inventurnummer:null,
        kurzbezeichnung:null,
        langbezeichnung:null,
        seriennummer:null,
        kategorie:null,
    }

    constructor(props) {
        super(props);


    }

    render() {


        return (
            <View style={styles.container}>
                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title,{marginBottom:0}]}>Marke</Text>
                <TextInput
                    style={{ height: 40 }}
                    placeholder="Hello"
                    onChangeText={(text) => {
                        this.setState({ text })
                    }}
                />
                <View style={styles.hline}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
container:{
    alignItems:'center',
    justifyContent:'center'
},
hline:{
    borderBottomColor:colors.primary,
    borderBottomWidth:1,
    width:'100%'
}
});