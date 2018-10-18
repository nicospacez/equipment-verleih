import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

import { fonts, colors } from '../theme';

export class DetailLabel extends Component {

    constructor() {
        super();

    }

    render() {

        return (
            <View>
                <Text style={styles.textbox}>{this.props.text}</Text>
                <Text style={styles.titlebox}>{this.props.title}</Text>
            </View>
        );

    }


}

const styles = StyleSheet.create({
    textbox:{
        borderBottomWidth:2,
        borderBottomColor:colors.lightblue,
        padding:10,
        fontSize:20
    },
    titlebox:{
        color:colors.lightblue
    }
})
