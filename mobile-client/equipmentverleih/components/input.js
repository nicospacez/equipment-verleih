import React from 'react';
import {StyleSheet,TextInput,View} from 'react-native';

import { colors, fonts } from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({ placeholder, onChangeText, type, name, ...props }) => (
  <View style={styles.container}>
    <Icon name={name} size={25} style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={[styles.input]}
        placeholder={placeholder}
        placeholderTextColor='#888'
        onChangeText={value => onChangeText(type, value)}
        underlineColorAndroid='transparent'
        {...props}
      />
  </View>
)

const styles = StyleSheet.create({
  input: {
    marginLeft:20,
    marginBottom: 0,
    fontSize: 19,
    padding:10,
    fontFamily: fonts.hairline
  },
  container:{
    flexDirection:'row',
    alignItems:'center',
    borderWidth:0,
    borderBottomWidth:1,
    borderColor:colors.grey1,
    marginBottom:20,
    borderRadius:0
  },
  icon:{
    marginLeft:20
  }
})