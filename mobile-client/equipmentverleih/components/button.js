import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { fonts, colors } from '../theme'

export default ({ title, onPress, isLoading, bgcolor, textcolor }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={[styles.button,{backgroundColor:bgcolor}]}>
      <Text style={[styles.buttonText, {color:textcolor}]}>{title}</Text>
      {
        isLoading && (
          <View style={styles.activityIndicator}>
            <ActivityIndicator color={colors.primary} />
          </View>
        )
      }
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  button: {
    marginTop: 0,
    flexDirection: 'row',
    marginLeft:0,
    justifyContent:'center',
    borderRadius:5,
    padding:12
  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 22
  },
  activityIndicator: {
    transform: [{scale: 0.70}],
    marginTop: 3.5,
    marginLeft: 5
  }
})