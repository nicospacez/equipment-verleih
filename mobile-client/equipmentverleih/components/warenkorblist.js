import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { colors } from '../theme';
import Icon from 'react-native-vector-icons/Ionicons';


export class WarenkorbList extends Component {

    constructor(props) {
        super(props);
    }


    render() {


        return (
            <View>



                <ScrollView horizontal={false}>
                    {this.props.data.body.slice(0, this.props.limit).map((value, i) => {

                        return (

                            <View style={styles.row} key={i}>
                                <View style={styles.text}>
                                    <Image style={styles.img} source={require('../images/logo.png')} />
                                </View>
                                <Text style={styles.text}>{value.name}</Text>
                                <Icon color={colors.red} name="md-trash" size={24} style={styles.text} onPress={() => navigation.push('ProfileScreen')} />
                            </View>

                        )

                    })}
                </ScrollView>
            </View>
        );


    }



}

const styles = StyleSheet.create({
    headerrow: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey1
    },
    row: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey1,
        marginTop: 10
    },
    row2: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.grey2
    },
    text: {
        width: '33%',
        textAlign: 'center'
    },

    accent: {
        position: 'absolute',
        right: 0,
        width: '1%',
        height: '80%',
        backgroundColor: colors.red
    },
    img: {
        height: 45,
        width: 45
    }
});