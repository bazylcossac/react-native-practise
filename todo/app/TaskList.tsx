import { SafeAreaView } from "react-native";
import { Dimensions, Text, View } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
import {styles}
const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

export default function Index() {
  const theme = useTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{color: theme.colors.primary}}>Edit app/index.tsx to edit this screen.</Text>
      <TextInput />
    </SafeAreaView>
  );
}

