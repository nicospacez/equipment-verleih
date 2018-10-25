import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { WarenkorbList } from '../components/warenkorblist';
import { getCartList } from '../services/RentalService';
import PubSub from 'pubsub-js';
import { colors } from '../theme';
import { ToggleButton } from '../components/togglebutton';
import DateTimePicker from 'react-native-modal-datetime-picker';

export class WarenkorbScreen extends Component {
  state = {
    isDateTimePickerVisible: false,
    dateType:"start",
    pickedStartDate:new Date(),
    pickedEndDate:new Date()
  };

  _showDateTimePickerStart = () => { 
    this.setState({ isDateTimePickerVisible: true,
    dateType:"start"
    }); 
  }
  _showDateTimePickerEnd = () => { 
    this.setState({ isDateTimePickerVisible: true,
      dateType:"end" 
    }); 
  }

  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    console.log('A date has been picked: ', date);
    if(this.state.dateType == "start"){
      this.setState({
        pickedStartDate:date
      })
    }else if(this.state.dateType=="end"){
      this.setState({
        pickedEndDate:date
      })
    }
    this._hideDateTimePicker();
  };


  constructor(props) {
    super(props);
    this.state = {
      data: null
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



  render() {
    if (!this.state.data) {
      return <ActivityIndicator size="large" color="#0000ff" />
    }

    return (

      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.filternnach}>Filtern nach:</Text>
          <View style={{ flexDirection: 'row', borderBottomColor: colors.grey1, borderBottomWidth: 2 }}>
            <ToggleButton buttoncolor={colors.green} title={"Frei"} />
            <ToggleButton buttoncolor={colors.yellow} title={"Reserviert"} />
            <ToggleButton buttoncolor={colors.red} title={"Ausgeliehen"} />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <ToggleButton buttoncolor={colors.primary} title={"Datum"} />
            <TouchableOpacity onPress={this._showDateTimePickerStart}>
              <Text >{this.state.pickedStartDate+""}</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, marginRight: 20 }}>-</Text>
            <TouchableOpacity onPress={this._showDateTimePickerEnd}>
              <Text >{this.state.pickedEndDate+""}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.box}>
          <WarenkorbList data={this.state.data} limit={5} />
        </View>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
      </View>
    )


  }

}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  box: {

    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',

  },
  filternnach: {
    fontSize: 18
  }
});