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
  
    <TouchableOpacity onPress={onPress} style={{ width: '90%', marginVertical:5 }}>
      <View style={[styles.button, { backgroundColor: bgcolor }]}>
        <Text style={[styles.buttonText, { color: textcolor }]}>{title}</Text>
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

    justifyContent: 'center',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    width: '100%'

  },
  buttonText: {
    fontFamily: fonts.bold,
    fontSize: 18
  },
  activityIndicator: {
    transform: [{ scale: 0.70 }],
    marginTop: 3.5,
    marginLeft: 5
  }
})