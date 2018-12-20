import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih, getKlassen, getUser } from '../services/RentalService';

export class AusleihScreen extends Component {

    static navigationOptions = {
        title: 'Ausleihen',
    };

    state = {
        klassen: [""],
        user: [""],
        selectedklasse: "",
        klasse: "",
        selecteduser:""
    }


    navdata = this.props.navigation.getParam("navdata");

    constructor(props) {
        super(props)
        console.log(this.navdata);

    }

    onAusleihenPressed() {
        console.log(this.navdata.produktId)
         postVerleih(this.navdata.produktId);
    }

    componentDidMount() {
        getKlassen().then((res) => {
            this.setState({
                klassen: res,

            })
        })
        getUser().then((res) => {
            this.setState({
                user: res
            })
        })
    }



    render() {



        return (
            <View style={styles.box}>
                <View >
                    <Text style={gstyles.title}>Equipment</Text>
                    <Text style={{ marginLeft: 25 }}>{this.navdata.marke} {this.navdata.bezeichnung}</Text>

                    <Text style={gstyles.title}>Klasse</Text>
                    <Picker
                        selectedValue={this.state.selectedklasse}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selectedklasse: itemValue })}>

                        <Picker.Item label="Klasse wählen" value="x" />
                        {this.state.klassen.map(klasse => {
                            return <Picker.Item label={klasse} value={klasse} />
                        })}
                    </Picker>

                    <Text style={gstyles.title}>Schüler</Text>
                    <Picker
                        selectedValue={this.state.selecteduser}
                        style={{ height: 50, width: 300 }}
                        onValueChange={(itemValue, itemIndex) => this.setState({ selecteduser: itemValue })}>

                        <Picker.Item label="Benutzer wählen" value="x" />
                        {this.state.user.map(u => {
                            return <Picker.Item label={u.vorname+" "+u.nachname} value={u.userId} />
                        })}
                    </Picker>

                    <Button style={styles.submitbutton} onPress={() => this.onAusleihenPressed()} title="Ausborgen" textcolor={colors.white} bgcolor={colors.green} />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    submitbutton: {
        width: '100%'
    },
    box: {

        padding: 10,
        marginTop: 10,
        backgroundColor: colors.white,

        elevation: 2

    }

});