import Loader from "@/components/Loader";
import useTasks from "@/store/Tasks.bear";
import { getTask, getTasks } from "@/store/Tasks.selectors";
import { SafeAreaView } from "react-native";
import { Dimensions, Text, View, StyleSheet } from "react-native";
import { useTheme, TextInput } from "react-native-paper";
import {FlashList} from "@shopify/flash-list"

const deviceWidth = Dimensions.get("screen").width
const deviceHeight = Dimensions.get("screen").height

export default function Index() {
  const theme = useTheme()
  const tasks = Object.values(useTasks(getTasks))

  if(!tasks) return <Loader />
  return (
    <SafeAreaView
      style={{
        ...styles.SafeAreaViewStyle,
        backgroundColor: theme.colors.background,
      }}
    >
      <Text style={{color: theme.colors.primary}}>Edit app/index.tsx to edit this screen.</Text>
      <FlashList data={tasks} renderItem={({item}) => <Text>{item.body}</Text>}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewStyle: {
      flex: 1,
      width: deviceWidth,
      height: deviceHeight,
  }
})