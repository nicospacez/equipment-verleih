import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors, gstyles } from '../theme';
import { DetailLabel } from '../components/detailLabel';
import Button from '../components/button';
import LoginService from '../services/AuthService';




export class DetailScreen extends Component {

  static navigationOptions = {
    title: 'Details',
  };

  state = {
    admin:false
  }

  navdata = this.props.navigation.getParam("navdata");

  constructor(props){
    super(props)
    console.log(this.navdata);
    
  }
  componentDidMount(){
    ls = new LoginService();
    if(ls.isAdmin()){
      this.setState({
        admin:true
      });
    }
  }

  pushAusleihScreen(){
    console.log("pressed");
    this.props.navigation.navigate("AusleihScreen", {navdata:this.navdata});
  }

  render() {



    return (
      <ScrollView>
        <View style={styles.imgbox}>
          <Image style={styles.img} source={require('../images/logo_text.png')} />
        </View>
        {this.state.admin && (<View style={gstyles.box}><Button onPress={()=>this.pushAusleihScreen()} style={styles.ausborgenbutton} title="Verleihen" textcolor={colors.white} bgcolor={colors.green}/></View>)}
        
        <View style={gstyles.box}>
          
          <DetailLabel title={"Hersteller"} text={this.navdata.marke} />
          <View style={styles.line}></View>
          <DetailLabel title={"Bezeichnung"} text={this.navdata.bezeichnung} />
          <View style={styles.line}></View>
          <DetailLabel title={"Kurzbezeichnung"} text={this.navdata.kurzbezeichnung} />
          <View style={styles.line}></View>
          <DetailLabel title={"Kategorie"} text={this.navdata.kategorie.kurzbezeichnung} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  scrollView: {
    padding: 15
  },
  ausborgenbutton:{
   width:'100%'
  },
  img: {
    height: 200,
    resizeMode: 'contain',

  },
  imgbox: {
    width: '100%',
    alignItems: 'center'
  },
  headbox: {
    flex: 1,
    height: 250,
    backgroundColor: colors.green
  },
  line:{
    height:1,
    width:'90%',
    backgroundColor:colors.primary
  }
  
});