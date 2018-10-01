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
    marginTop: 10,
    flexDirection: 'row',
    marginLeft:0,
    backgroundColor:colors.lightblue,
    justifyContent:'center',
    borderRadius:100
  },
  buttonText: {
    color: 'white',
    fontFamily: fonts.light,
    fontSize: 20,
    letterSpacing: 0.5,
    padding:10
  },
  activityIndicator: {
    transform: [{scale: 0.70}],
    marginTop: 3.5,
    marginLeft: 5
  }
})