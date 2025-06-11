import {Tabs} from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Appearance } from "react-native";
import {PaperProvider} from "react-native-paper"
import { TabBarDark, TabBarLight } from "@/assets/themeColors";




export default function RootLayout() {
  

  return (
      <PaperProvider>
          <Tabs screenOptions={{tabBarActiveTintColor: "teal", headerShown: false, tabBarStyle: {backgroundColor: Appearance.getColorScheme() === "dark" ? TabBarDark : TabBarLight}}} backBehavior="order" >
              <Tabs.Screen name="TaskList"  options={{tabBarIcon: ({color}) => <FontAwesome6 name="boxes-stacked" size={24} color={color} />, tabBarLabel: "Main", tabBarShowLabel: false, headerTitle: () => null}}/>
              <Tabs.Screen name="TaskEditor" options={{tabBarIcon: ({color}) => <AntDesign name="edit" size={24} color={color} />, tabBarLabel: "Edit", tabBarShowLabel: false, tabBarBadge: 22, tabBarBadgeStyle: {fontSize: 10}, headerTitle: () => null, popToTopOnBlur: true}}/>
          </Tabs>
      </PaperProvider>
      
  )
}

