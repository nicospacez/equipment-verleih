import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih, getKlassen, getUsers } from '../services/RentalService';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PubSub from 'pubsub-js';

export class AusleihScreen extends Component {

    static navigationOptions = {
        title: 'Verleihen',
    };




    navdata = this.props.navigation.getParam("navdata");

    constructor(props) {
        super(props)
        console.log(this.navdata);
        this.state = {
            klassen: [""],
            user: [""],
            selectedklasse: "",
            klasse: "",
            selecteduser: "",
            isDateTimePickerVisible: false,
            zdate: new Date()
        }

        d = this.state.zdate;
        d.setDate(d.getDate() + 7);
        this.setState({
            zdate: d
        });

    }

    onAusleihenPressed() {
        console.log(this.navdata.produktId)
        postVerleih(this.navdata.produktId, this.state.selecteduser, this.state.zdate).then(res => {
            
        })

        this.props.navigation.navigate("AdminScreen");
    }

    componentDidMount() {
        getKlassen().then((res) => {
            this.setState({
                klassen: res,

            })
        })
        let user = getUsers().then(res => {
            this.setState({
                user: res
            })
        })



    }

    showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        this.setState({
            zdate: date
        });
        this._hideDateTimePicker();
    };

    formatDate(date) {
        return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
    }


    render() {



        return (
            <View style={gstyles.container}>
                <View style={gstyles.box}>
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
                                return <Picker.Item label={u.vorname + " " + u.nachname} value={u.userId} />
                            })}
                        </Picker>

                        <Text style={gstyles.title}>Verleihen bis:</Text>
                        <TouchableOpacity style={{ marginBottom: 20 }} onPress={this.showDateTimePicker}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>{this.formatDate(this.state.zdate)}</Text>
                        </TouchableOpacity>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />

                        <Button style={styles.submitbutton} onPress={() => this.onAusleihenPressed()} title="Verleihen" textcolor={colors.white} bgcolor={colors.green} />
                    </View>
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