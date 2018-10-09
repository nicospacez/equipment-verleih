import React, { Component } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../theme';


export class EquipmentList extends Component {



    render() {
        console.log(this.props.data);


        return (
            <View style={styles.bigbox}>
                <Text style={styles.title}>{this.props.data.title}</Text>
                <ScrollView horizontal={true}>

                    {this.props.data.texts.map((data) => {
                        return (
                            <TouchableOpacity>
                            <View style={styles.singleBox}>
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
        fontSize: 20,
        textAlign: 'center',
        
    },
    title: {
        fontFamily: fonts.bold,
        fontSize: 20,
        marginBottom: 10,
        color: colors.primary
    },
    img: {
        height: 130,
        width: 130
    },
    singleBox: {
        marginRight: 15,
        borderWidth:2,
        borderColor:colors.primary,
        borderRadius:5,
        marginBottom:20,
        alignItems:'center'
        
      
    },
    bigbox: {
        marginBottom: 20,
    }
});