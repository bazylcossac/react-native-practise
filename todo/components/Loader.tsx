import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper'

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

export default function Loader() {
    const theme = useTheme()
  return (
    <View style={{width: deviceWidth, height: deviceHeight, flex: 1}}>
      <Text style={{color: theme.colors.primary}}>Loading...</Text>
    </View>
  )
}