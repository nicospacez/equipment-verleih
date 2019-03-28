import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../theme';


export class ListView extends Component {

    constructor(props) {
        super(props);


    }

    head = [
        "Produkt",
        "Seit",
        "Bis"
    ]

    pushDetailScreen(value){
        console.log("eins", value);
        this.props.detail(value);
    }

    render() {
        return (
            <View>
                <View style={styles.headerrow}>
                    {this.head.map((value, i) => {
                        return (
                            <Text style={[{ color: colors.white, fontWeight: 'bold' }, styles.text]} key={i}>{value}</Text>
                        )
                    })}
                </View>

                {this.props.data.slice(0, this.props.limit).map((value, i) => {
                    console.log("VALUE", value)
                    if (i % 2 == 0) {
                        return (
                            <TouchableOpacity key={i} onPress={() => this.pushDetailScreen(value.produkt)}>
                                <View style={styles.row} key={i}>
                                    <Text style={styles.text}>{value.produkt.langbezeichnung}</Text>
                                    <Text style={styles.text}>{value.startDate}</Text>
                                    <Text style={styles.text}>{value.endDate}</Text>
                                    <View style={styles.accent}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    } else {
                        return (
                            <TouchableOpacity key={i} onPress={() => this.pushDetailScreen(value)}>
                                <View style={styles.row2} key={i}>
                                    <Text style={styles.text}>{value.produkt.langbezeichnung}</Text>
                                    <Text style={styles.text}>{value.startDate}</Text>
                                    <Text style={styles.text}>{value.endDate}</Text>
                                    <View style={styles.accent}></View>
                                </View>
                            </TouchableOpacity>
                        )
                    }

                })}



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
        backgroundColor: colors.primary
    },
    headtext: {
        color: '#fff'
    },
    row: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center'
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
    }
});