import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';






export class AusleihScreen extends Component {

    static navigationOptions = {
        title: 'Ausleihen',
    };



    navdata = this.props.navigation.getParam("navdata");

    constructor(props) {
        super(props)
        console.log(this.navdata);

    }
    componentDidMount() {

    }

    render() {



        return (
            <View>
                <View style={gstyles.box}>
                    <Text style={gstyles.title}>Equipment</Text>
                    <Text>asdfa</Text>
                </View>
                <View style={gstyles.box}>
                    <Text style={gstyles.title}>Klasse</Text>
                    <Picker>
                        <Picker.Item label="asdf" value="asdf" />
                    </Picker>
                </View>
                <View style={gstyles.box}>
                    <Text style={gstyles.title}>Schüler</Text>
                    <Picker>
                        <Picker.Item label="asdf" value="asdf" />
                    </Picker>
                </View>
                <View style={gstyles.box}>
                    <Button onPress={() => { console.log("asdf"); }} title="Ausborgen" textcolor={colors.grey1} bgcolor={colors.green} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({


});