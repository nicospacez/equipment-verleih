import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Picker, Alert, TouchableOpacity, ActivityIndicator, Image, ScrollView, TextInput } from 'react-native';
import { colors, gstyles } from '../theme';
import Button from '../components/button';
import { postVerleih, postCategory, getKategorien } from '../services/RentalService';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';


export class AddCategoryScreen extends Component {

    static navigationOptions = {
        title: 'Kategorie hinzufügen'
    };





    constructor(props) {
        super(props)

        this.state = {
            kurzbezeichnung: "",
            loading: false,
            kategorien: [],
            selectedKategorie: null
        }

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

    addCategory = () => {
        this.setState({
            loading: true
        });
        let cat = null;
        if (this.state.selectedKategorie) {
            cat = {
                kurzbezeichnung: this.state.kurzbezeichnung,
                kategorie: {
                    kategorieId: this.state.selectedKategorie
                }
            }
        } else {
            cat = {
                kurzbezeichnung: this.state.kurzbezeichnung
            }
        }

        console.log(cat);
        postCategory(cat).then(res => {
            if (res.ok) {
                this.setState({
                    loading: false
                });
                this._goBack();
            }
        })

    }

    _goBack() {
        this.props.navigation.goBack();
    }

    render() {



        return (
            <View style={gstyles.container}>
                <View style={gstyles.box}>
                    <ScrollView style={styles.scrollview}>
                        <View style={styles.container}>
                            <View style={styles.formborder}>
                                <Text style={[styles.formtitle, { marginBottom: 0 }]}>Kurzbezeichnung</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Kurzbezeichnung"
                                    onChangeText={(text) => {
                                        this.setState({ kurzbezeichnung: text })
                                    }}
                                />
                            </View>
                            <View style={styles.formborder}>
                            <Text style={[styles.formtitle, { marginBottom: 0 }]}>Überkategorie</Text>
                                <Picker
                                    selectedValue={this.state.selectedKategorie}
                                    style={{ height: 40, width: 200 }}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ selectedKategorie: itemValue })}>

                                    <Picker.Item label="Überkategorie wählen" value={null} />
                                    {this.state.kategorien.map((k, i) => {
                                        return <Picker.Item key={i} label={k.kurzbezeichnung} value={k.kategorieId} />
                                    })}
                                </Picker>
                            </View>

                            
                        </View>
                    </ScrollView>

                </View>
                {this.renderButton()}
            </View>

        );
    }

    renderButton() {
        if (this.state.loading) {
            return <ActivityIndicator size="large" color={colors.primary} />
        } else {
            return <Button style={styles.submitbutton} onPress={() => this.addCategory()} title="Kategorie erstellen" textcolor={colors.white} bgcolor={colors.primary} />
        }
    }


}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%'
    },
    scrollview: {
        width: '100%'
    },
    form: {
        margin: 30
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
        width: 200
    },
    submitbutton: {
        width: '100%',
        marginTop: 40
    },
    formborder: {
        borderWidth: 1,
        borderColor: colors.grey,
        borderRadius: 5,
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