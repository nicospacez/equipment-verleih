import React from 'react';
import {StyleSheet,TextInput} from 'react-native';

import { colors, fonts } from '../theme';

export default ({ placeholder, onChangeText, type, ...props }) => (
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
)

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginBottom: 15,
    borderBottomWidth: 1.5,
    fontSize: 20,
    borderBottomColor: colors.lightblue,
    fontFamily: fonts.light
  }
})