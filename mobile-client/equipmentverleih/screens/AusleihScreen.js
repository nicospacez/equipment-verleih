import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih, getKlassen, getUsers, getUsersByClass } from '../services/RentalService';
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
            zdate: new Date(),
            secondPickerEnabled: false
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
            if (res.status >= 200) {
                console.log("Verleih", res);
                PubSub.publish("reload_adminscreen", "");
                this.props.navigation.goBack();
            }
        })


    }

    componentDidMount() {
        getKlassen().then((res) => {
            this.setState({
                klassen: res,

            })
        })

    }

    firstPickerChanged(value, index) {
        this.setState({
            selectedklasse: value
        });
        if (index > 0) {
            this.setState({ secondPickerEnabled: true });
            getUsersByClass(value).then(res => {
                console.log("USERBYCLASS", res);
                this.setState({
                    user: res.userDtoList
                });
            })
        }

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

                    <View style={styles.formborder}>
                        <Text style={styles.formtitle}>Equipment</Text>
                        <Text style={styles.formtext}>{this.navdata.marke} {this.navdata.bezeichnung}</Text>
                    </View>
                    <View style={styles.formborder}>
                        <Text style={styles.formtitle}>Klasse</Text>
                        <Picker
                            selectedValue={this.state.selectedklasse}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue, itemIndex) => { this.firstPickerChanged(itemValue, itemIndex) }}>

                            <Picker.Item label="Klasse wählen" value="x" />
                            {this.state.klassen.map((klasse, i) => {
                                return <Picker.Item key={i} label={klasse} value={klasse} />
                            })}
                        </Picker>
                    </View>
                    <View style={styles.formborder}>
                        <Text style={styles.formtitle}>Schüler</Text>
                        <Picker
                            selectedValue={this.state.selecteduser}
                            enabled={this.state.secondPickerEnabled}
                            style={{ height: 50, width: 300 }}
                            onValueChange={(itemValue, itemIndex) => this.setState({ selecteduser: itemValue })}>

                            <Picker.Item label="Benutzer wählen" value="x" />
                            {this.state.user.map((u, i) => {
                                return <Picker.Item key={i} label={u.vorname + " " + u.nachname} value={u.userId} />
                            })}
                        </Picker>
                    </View>
                    <View style={styles.formborder}>
                        <Text style={styles.formtitle}>Verleihen bis</Text>
                        <TouchableOpacity style={{ marginBottom: 20 }} onPress={this.showDateTimePicker}>
                            <Text style={{ fontSize: 20, textAlign: 'center' }}>{this.formatDate(this.state.zdate)}</Text>
                        </TouchableOpacity>

                        <DateTimePicker
                            isVisible={this.state.isDateTimePickerVisible}
                            onConfirm={this._handleDatePicked}
                            onCancel={this._hideDateTimePicker}
                        />
                    </View>
                </View>
                

                    <Button style={styles.submitbutton} onPress={() => this.onAusleihenPressed()} title="Verleihen" textcolor={colors.white} bgcolor={colors.primary} />

                
            </View >

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

    },
    formborder: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius:5,
        width: '90%',

        marginVertical: 5,
        padding: 10
    },
    formtitle: {
        color: colors.primary,
        fontSize: 15
    },
    formtext: {
        fontSize: 20
    }

});