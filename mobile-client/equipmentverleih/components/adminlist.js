import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { colors } from '../theme';


export class AdminList extends Component {

    constructor(props) {
        super(props);
    }

    //VARIABLES
    accentColor = {
        backgroundColor: '#123123'
    }

    rowColor = {
        backgroundColor: '#123123'
    }
    //=========
    
    pushDetailScreen(value) {
        nav = this.props.nav;
        nav.navigate("DetailScreen", { navdata: value });
        console.log(value);
    }


    render() {


        return (
            <View>
                <View style={styles.headerrow}>
                    <Text style={styles.text} >Gerätename</Text>
                    <Text style={styles.text} >Kategorie</Text>
                    <Text style={styles.text} >Kürzel</Text>
                </View>
                <ScrollView horizontal={false}>
                    {this.props.data.map((value, i) => {

                        //CHANGE STATUS COLOR
                        if (value.status == "FREI") {
                            this.accentColor = {
                                backgroundColor: colors.green
                            }
                        } else if (value.status == "VERLIEHEN") {
                            this.accentColor = {
                                backgroundColor: colors.red
                            }
                        } else if (value.status == "RESERVIERT") {
                            this.accentColor = {
                                backgroundColor: colors.yellow
                            }
                        } else if (value.status == "GESPERRT") {
                            this.accentColor = {
                                backgroundColor: colors.grey
                            }
                        }
                        //===================
                        //CHANGE BACKGROUND COLOR (2nd ROW)
                        if (i % 2 == 0) {
                            this.rowColor = {
                                backgroundColor: colors.grey2
                            }
                        } else {
                            this.rowColor = {
                                backgroundColor: null
                            }
                        }
                        //=================================
                        //RENDER ROW
                        return (
                            <TouchableOpacity onPress={() => this.pushDetailScreen(value)} key={i}>
                                <View style={[styles.row, this.rowColor]} >
                                    <Text style={styles.text}>{value.marke}{value.bezeichnung}</Text>
                                    <Text style={styles.text}>{value.kategorie.kurzbezeichnung}</Text>
                                    <Text style={styles.text}>{value.kurzbezeichnung}</Text>
                                    <View style={[styles.accent, this.accentColor]}></View>
                                </View>
                            </TouchableOpacity>
                        );
                        //==========
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
        alignItems: 'center'
    },
    text: {
        width: '33%',
        textAlign: 'center'
    },

    accent: {
        position: 'absolute',
        right: 0,
        width: '1%',
        height: '80%'
    }
});