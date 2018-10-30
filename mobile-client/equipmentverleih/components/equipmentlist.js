import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';


export class EquipmentList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        console.log(this.props.onPress);

        return (
            <View style={styles.bigbox}>
                <Text style={styles.title}>{this.props.data.title}</Text>
                <ScrollView horizontal={true} style={styles.sview}>

                    {this.props.data.texts.map((data, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={this.props.onClick} >
                                <View style={styles.singleBox} >
                                    <Image style={styles.img} source={require('../images/logo.png')} />
                                    <Text style={styles.text}>{data.text}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}


                </ScrollView>
            </View>
        );


    }

}

const styles = StyleSheet.create({
    text: {
        width: 130,
        height: 50,
        fontSize: 15,
        textAlign: 'center',
        color: colors.lightblue,
        marginTop: 10
    },
    sview: {
        padding: 20
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 18,
        marginBottom: 5,
        color: colors.primary,
        width: '100%'
    },
    img: {
        height: 100,
        width: 100
    },
    singleBox: {
        marginRight: 5,
        marginBottom: 0,
        alignItems: 'center',
        color: colors.white,
        backgroundColor: colors.grey1,
        elevation: 2


    },
    bigbox: {
        marginTop: 0,
        flex: 1,
        marginBottom: 10,
        elevation: 2,
        padding: 0
    }
});