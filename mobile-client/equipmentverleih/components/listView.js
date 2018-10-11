import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';


export class ListView extends Component {

    constructor(props) {
        super(props);


    }


    render() {


        return (
            <View>


                <View style={styles.headerrow}>
                    {this.props.data.head.map((value, i) => {
                        return (
                            <Text style={styles.text}>{value}</Text>
                        )
                    })}
                </View>

                {this.props.data.body.slice(0,this.props.limit).map((value, i) => {
                    if(i%2 == 0){
                        return (
                            <View style={styles.row}>
                                <Text style={styles.text}>{value.name}</Text>
                                <Text style={styles.text}>{value.kuerzel}</Text>
                                <Text style={styles.text}>{value.status}</Text>
                                <View style={styles.accent}></View>
                            </View>
                        )
                    }else{
                        return (
                            <View style={styles.row2}>
                                <Text style={styles.text}>{value.name}</Text>
                                <Text style={styles.text}>{value.kuerzel}</Text>
                                <Text style={styles.text}>{value.status}</Text>
                                <View style={styles.accent}></View>
                            </View>
                        )
                    }
                    
                })}


                
            </View>
        );


    }

    

}

const styles = StyleSheet.create({
    headerrow:{
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:colors.grey1
    },
    row: {
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center'
    },
    row2:{
        width: '100%',
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:colors.grey2
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