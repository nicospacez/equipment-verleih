import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

import { fonts, colors } from '../theme';

export class DetailLabel extends Component {

    constructor() {
        super();

    }

    render() {

        return (
            <View style={styles.label}>
                <Text style={styles.title}>{this.props.title}</Text>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );

    }


}

const styles = StyleSheet.create({
    label: {
        padding:10,
        borderBottomWidth: 3,
        borderColor: colors.grey1,
        flexDirection: 'row'
    },
    text: {
        
     alignSelf:'stretch',
     textAlign:'right',
     width:'50%'
    },
    title: {
        width:'50%',
        color: colors.black
    }
})
