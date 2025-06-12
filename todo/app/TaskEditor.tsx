

import { SafeAreaView } from 'react-native-safe-area-context'
import React, {useMemo} from 'react'
import { MD3Theme, useTheme } from 'react-native-paper'
import { StyleSheet,  View, Text, Dimensions  } from 'react-native'


const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

export default function Edit() {
  const theme = useTheme()
  
  return (
    <SafeAreaView style={{...styles.SafeAreaView, backgroundColor: theme.colors.background,}} >
      <Text>edit page</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: {
    display: "flex",
    flexDirection: "column",
    width: deviceWidth,
    height: deviceHeight,
    
  }
})