import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { AdminList } from '../components/adminlist';
import { getCartList, getAdminList, dataStore } from '../services/RentalService';
import PubSub from 'pubsub-js';
import { colors, gstyles } from '../theme';
import { ToggleButton } from '../components/togglebutton';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export class AdminScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    headerRight: (
      <Icon color={colors.headerbartext} name="md-menu" size={24} style={{ marginRight: 15 }} onPress={() => navigation.push('AdminMenuScreen')} />
    )
  });

  state = {
    renderDatePicker: false,
    isDateTimePickerVisible: false,
    dateType: "start",
    isLoading: true,
    data: null,
  };




  constructor(props) {
    super(props);
    this.state = {
      data: null,
      pickedStartDate: new Date(),
      pickedEndDate: new Date(),
      isLoading: true
    }

  }

  componentDidMount() {

    this.fetchAdminList();
  }


  //DATA FETCHING
  fetchAdminList() {
    getAdminList().then((res) => {
      console.log(res);
      this.setState({
        
        isLoading: false,
        data: res
      });
    })
  }
  //==============


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

  formatDate(date) {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
  }

  toggleRenderDate(){
    console.log("toggle");
    if(this.state.renderDatePicker){
      this.setState({
        renderDatePicker:false
      })
    }else{
      this.setState({
        renderDatePicker:true
      })
    }
  }

  renderAdminList() {

    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color={colors.primary} />
    } else {
      return (
        <ScrollView style={styles.sview} >
          <AdminList nav={this.props.navigation} data={this.state.data} limit={50000} />
        </ScrollView>
      );
    }

  }

  renderDatePicker() {

    if (this.state.renderDatePicker) {
      return (


        <View style={styles.box2}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={this._showDateTimePickerStart}>
              <Text >{this.formatDate(this.state.pickedStartDate)}</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, marginRight: 20 }}>-</Text>
            <TouchableOpacity onPress={this._showDateTimePickerEnd}>
              <Text >{this.formatDate(this.state.pickedEndDate)}</Text>
            </TouchableOpacity>
          </View>

        </View>

      );

    } else {

    }


  }


  render() {

    return (

      <View>
        <View style={styles.box2}>
          <Text style={styles.filternnach}>Filtern nach:</Text>
          <View style={{ flexDirection: 'row' }}>
            <ToggleButton buttoncolor={colors.green} title={"Frei"} />
            <ToggleButton buttoncolor={colors.yellow} title={"Reserviert"} />
            <ToggleButton buttoncolor={colors.red} title={"Ausgeliehen"} />
            <ToggleButton buttoncolor={colors.primary} title={"Datum"} onClick={() =>this.toggleRenderDate()} />
          </View>
        </View>

        {this.renderDatePicker()}




        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <View style={styles.box2}>
          {this.renderAdminList()}
        </View>

      </View>
    );


  }

}

const styles = StyleSheet.create({


  box1: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    elevation: 2,
    height: 50


  },
  box2: {

    padding: 10,
    marginTop: 10,
    backgroundColor: colors.white,
    alignItems: 'center',
    elevation: 2

  },
  sview: {
    position: "relative",
  },
  filternnach: {
    fontSize: 18
  }
});