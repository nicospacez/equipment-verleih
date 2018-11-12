import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity, Image, ScrollView } from 'react-native';
import { colors } from '../theme';
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

  constructor(props){
    super(props)
    
  }
  componentDidMount(){
    ls = new LoginService();
    if(ls.isAdmin()){
      this.setState({
        admin:true
      });
    }
  }

  render() {



    return (
      <ScrollView>
        <View style={styles.imgbox}>
          <Image style={styles.img} source={require('../images/logo_text.png')} />
        </View>
        {this.state.admin && (<Button  title="Ausborgen" textcolor={colors.grey1} bgcolor={colors.green}/>)}
        
        <View style={styles.bodybox}>
          
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
          <DetailLabel title={"asdf"} text={"lol"} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  scrollView: {
    padding: 15
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
  bodybox: {

    flex: 1,
    margin: 10,
    backgroundColor: colors.white,
    elevation: 2,
    padding: 10
  }
});