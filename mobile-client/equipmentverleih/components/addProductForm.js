import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { colors, gstyles } from '../theme';
import { getKategorien,postProdukt } from '../services/RentalService';
import Button from '../components/button';


export class AddProductForm extends Component {

    state = {
        kategorien: [],
        selectedKategorie: null,

        marke: null,
        bezeichnung: null,
        inventurnummer: null,
        kurzbezeichnung: null,
        langbezeichnung: null,
        seriennummer: null,
        kategorie: null,
    }

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.fetchKategorien();
    }

    fetchKategorien() {
        getKategorien().then((res) => {
            this.setState({
                kategorien: res
            })
        })
    }

    render() {


        return (

            <View style={styles.container}>
                <Text style={[gstyles.title, { marginBottom: 0 }]}>Marke</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Marke"
                    onChangeText={(text) => {
                        this.setState({ marke: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Bezeichnung</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Bezeichnung"
                    onChangeText={(text) => {
                        this.setState({ bezeichnung: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Kurzbezeichnung</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Kurzbezeichnung"
                    onChangeText={(text) => {
                        this.setState({ kurzbezeichnung: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Langbezeichnung</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Langbezeichnung"
                    onChangeText={(text) => {
                        this.setState({ langbezeichnung: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Inventurnummer</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Inventurnummer"
                    onChangeText={(text) => {
                        this.setState({ inventurnummer: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Seriennummer</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seriennummer"
                    onChangeText={(text) => {
                        this.setState({ seriennummer: text })
                    }}
                />
                <View style={styles.hline}></View>

                <Text style={[gstyles.title, { marginBottom: 0 }]}>Kategorie</Text>

                <Picker
                    selectedValue={this.state.selectedKategorie}
                    style={{ height: 40, width: 200 }}
                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedKategorie: itemValue })}>

                    <Picker.Item label="Kategorie wählen" value="x" />
                    {this.state.kategorien.map(k => {
                        return <Picker.Item label={k.kurzbezeichnung} value={k.kategorieId} />
                    })}
                </Picker>

                <View style={styles.hline}></View>
                <View style={{ width: '100%' }}>
                    <Button style={styles.submitbutton} onPress={() => this.addProdukt()} title="Produkt erstellen" textcolor={colors.white} bgcolor={colors.green} />
                </View>
            </View>

        );
    }

    addProdukt() {
        data = {
            bezeichnung: this.state.bezeichnung,
            inventurnummer: this.state.inventurnummer,
            kurzbezeichnung: this.state.kurzbezeichnung,
            langbezeichnung: this.state.langbezeichnung,
            marke: this.state.marke,
            seriennummer: this.state.seriennummer,
            kategorie: {
                kategorieId: this.state.selectedKategorie
            }
        }

        console.log("Produkt:", data);
        postProdukt(data);

    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    hline: {
        borderBottomColor: colors.primary,
        borderBottomWidth: 1,
        width: '100%',
        marginBottom: 10,
        color: colors.grey
    },
    input: {
        height: 40,
        // borderBottomColor:colors.grey,
        // borderBottomWidth:1,
        width: 200,
        textAlign: 'center'
    },
    submitbutton: {
        width: '100%',
        marginTop: 40
    }
});