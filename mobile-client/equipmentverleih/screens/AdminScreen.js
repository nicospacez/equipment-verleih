import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AdminList } from '../components/adminlist';
import { getCartList } from '../services/RentalService';
import PubSub from 'pubsub-js';
import { colors } from '../theme';
import { ToggleButton } from '../components/togglebutton';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class AdminScreen extends Component {
  state = {
    isDateTimePickerVisible: false,
    dateType: "start",

  };

  _showDateTimePickerStart = () => {
    this.setState({
      isDateTimePickerVisible: true,
      dateType: "start"
    });
  }
  _showDateTimePickerEnd = () => {
    this.setState({
      isDateTimePickerVisible: true,
      dateType: "end"
    });
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    if (this.state.dateType == "start") {
      this.setState({
        pickedStartDate: date
      })
    } else if (this.state.dateType == "end") {
      this.setState({
        pickedEndDate: date
      })
    }
    this._hideDateTimePicker();
  };


  constructor(props) {
    super(props);
    this.state = {
      data: null,
      pickedStartDate: new Date(),
      pickedEndDate: new Date()
    }

  }

  componentDidMount() {
    this.fetchCartList();
  }

  fetchCartList() {
    data = getCartList();
    this.setState({
      data: data,
    })
  }

  formatDate(date) {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  }



  render() {
    if (!this.state.data) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (

      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.filternnach}>Filtern nach:</Text>
          <View style={{ flexDirection: 'row', borderBottomColor: colors.grey1, borderBottomWidth: 2 }}>
            <ToggleButton buttoncolor={colors.green} title={"Frei"} />
            <ToggleButton buttoncolor={colors.yellow} title={"Reserviert"} />
            <ToggleButton buttoncolor={colors.red} title={"Ausgeliehen"} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ToggleButton buttoncolor={colors.primary} title={"Datum"} />
            <TouchableOpacity onPress={this._showDateTimePickerStart}>
              <Text >{this.formatDate(this.state.pickedStartDate)}</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, marginRight: 20 }}>-</Text>
            <TouchableOpacity onPress={this._showDateTimePickerEnd}>
              <Text >{this.formatDate(this.state.pickedEndDate)}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <View style={styles.box2}>
          <ScrollView style={styles.sview} >

            <AdminList data={this.state.data} limit={50000} />

          </ScrollView>
        </View>

      </View>
    )


  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height:'75%'
  },
  box1: {

    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    height:'40%',
    elevation: 2

  },
  box2: {

    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    height:'90%',
    elevation:2

  },
  sview: {
    position: "relative",
    height:'100%'
  },
  filternnach: {
    fontSize: 18
  }
});