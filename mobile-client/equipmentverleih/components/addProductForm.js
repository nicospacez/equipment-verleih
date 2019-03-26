import React, { Component } from 'react';
import { View, TextInput, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Picker } from 'react-native';
import { colors, gstyles } from '../theme';
import { getKategorien,postProdukt } from '../services/RentalService';
import Button from '../components/button';
import PubSub from 'pubsub-js'


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

        loading:false
    }

    constructor(props) {
        super(props);


    }

    componentDidMount() {
        this.fetchKategorien();
    }

    fetchKategorien() {
        getKategorien().then((res) => {
            console.log(res);
            this.setState({
                kategorien: res
            })
        })
    }

    addProdukt() {
        this.setState({
            loading:true
        });
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
        postProdukt(data).then(res => {
            console.log("postproduct",res);
            if(res.ok){
                this.setState({
                    loading:false
                });
                PubSub.publish("reload_adminscreen", "");
                this.props.nav.goBack();
            }
        });
        

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
                    {this.state.kategorien.map((k,i) => {
                        return <Picker.Item key={i} label={k.kurzbezeichnung} value={k.kategorieId} />
                    })}
                </Picker>

                <View style={styles.hline}></View>
                <View style={{ width: '100%' }}>
                   {this.renderButton()}
                </View>
            </View>

        );
    }

    renderButton(){
        if(this.state.loading){
            return <ActivityIndicator size="large" color={colors.primary} />
        }else{
            return <Button style={styles.submitbutton} onPress={() => this.addProdukt()} title="Produkt erstellen" textcolor={colors.white} bgcolor={colors.primary} />
        }
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