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
      <Icon color={colors.headerbartext} name="md-menu" size={24} style={{ marginRight: 15 }} onPress={() => navigation.navigate('AdminMenuScreen')} />
    )
  });

  state = {
    renderDatePicker: false,
    isDateTimePickerVisible: false,
    dateType: "start",
    isLoading: true,
    data: null,
    adminListData: null

  };




  constructor(props) {
    super(props);


    this.state = {
      data: null,
      pickedStartDate: new Date(),
      pickedEndDate: new Date(),
      isLoading: true,
      activatedStatusFilter: [],


    }

    let reloadSub = PubSub.subscribe("reload_adminscreen", this.reload);


  }

  test = () => {
    console.log("test");
  }

  componentDidMount() {

    this.props.navigation.setParams({ refresh: this.fetchAdminList });

    this.fetchAdminList();
  }

  reload = (msg, data) => {
    this.fetchAdminList();
  }


  //DATA FETCHING
  fetchAdminList = () => {
    getAdminList().then((res) => {
      console.log("adminscreen", res);
      this.setState({

        isLoading: false,
        data: res,
        adminListData: res.produktDtoList
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

  toggleRenderDate() {
    console.log("toggle");
    if (this.state.renderDatePicker) {
      this.setState({
        renderDatePicker: false
      })
    } else {
      this.setState({
        renderDatePicker: true
      })
    }
  }

  filterListByStatus(status) {
    console.log("Add Filter:", status);
    f = this.state.activatedStatusFilter;
    f.push(status);
    this.setState({
      activatedStatusFilter: f
    });
    console.log("filter:", this.state.activatedStatusFilter);

    this.filterList();

  }

  removeFilterByStatus(status) {
    console.log("Remove Filter:", status);
    f = this.state.activatedStatusFilter;
    index = f.indexOf(status);
    f.splice(index, 1);
    this.setState({
      activatedStatusFilter: f
    });
    console.log("filter:", this.state.activatedStatusFilter);
    this.filterList();
  }

  filterList() {
    arr = [];
    console.log(this.state.data);

    if (this.state.activatedStatusFilter.length == 0) {
      arr = this.state.data.produktDtoList;
    } else {
      this.state.data.produktDtoList.map((v, i) => {
        console.log("filtermap");
        if (this.state.activatedStatusFilter.indexOf(v.status) > -1) {
          arr.push(v);
        }
      });
    }
    this.setState({
      adminListData: arr
    });

  }

  renderAdminList() {

    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color={colors.primary} />
    } else {
      return (
        <ScrollView style={styles.sview} >
          <AdminList nav={this.props.navigation} data={this.state.adminListData} limit={50000} />
        </ScrollView>
      );
    }

  }

  renderDatePicker() {

    if (this.state.renderDatePicker) {
      return (


        <View style={gstyles.box}>

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

      <View style={[gstyles.container, {}]}>
        <View style={gstyles.box}>
          <Text style={styles.filternnach}>Filtern nach:</Text>
          <View style={{ flexDirection: 'row' }}>
            <View>
              <ToggleButton buttoncolor={colors.green} title={"Frei"} onClick={() => this.filterListByStatus("FREI")} onDeactivate={() => this.removeFilterByStatus("FREI")} />
              <ToggleButton buttoncolor={colors.yellow} title={"Reserviert"} onClick={() => this.filterListByStatus("RESERVIERT")} onDeactivate={() => this.removeFilterByStatus("RESERVIERT")} />
            </View>
            <View>
              <ToggleButton buttoncolor={colors.red} title={"Verliehen"} onClick={() => this.filterListByStatus("VERLIEHEN")} onDeactivate={() => this.removeFilterByStatus("VERLIEHEN")} />
              <ToggleButton buttoncolor={colors.primary} title={"Datum"} />
            </View>
          </View>
        </View>

        {this.renderDatePicker()}




        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />
        <View style={[gstyles.box, { maxHeight: '50%' }]}>
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
  filternnach: {
    fontSize: 18
  }
});