import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { fonts, colors } from '../theme'

export default ({ title, onPress, isLoading }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.button}>
      <Text style={[styles.buttonText]}>{title}</Text>
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
    backgroundColor:colors.primary,
    justifyContent:'center',
    borderRadius:0,
    padding:10,
    marginBottom:20
  },
  buttonText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 19,
    letterSpacing: 2
  },
  activityIndicator: {
    transform: [{scale: 0.70}],
    marginTop: 3.5,
    marginLeft: 5
  }
})