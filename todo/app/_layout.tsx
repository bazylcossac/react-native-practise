import {Tabs} from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';



export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "teal", headerShown: false}} backBehavior="order" >
      <Tabs.Screen name="TaskList"  options={{tabBarIcon: ({color}) => <FontAwesome6 name="boxes-stacked" size={24} color={color} />, tabBarLabel: "Main", tabBarShowLabel: false, headerTitle: () => null}}/>
      <Tabs.Screen name="TaskEditor" options={{tabBarIcon: ({color}) => <AntDesign name="edit" size={24} color={color} />, tabBarLabel: "Edit", tabBarShowLabel: false, tabBarBadge: 22, tabBarBadgeStyle: {fontSize: 10}, headerTitle: () => null, popToTopOnBlur: true}}/>
    </Tabs>
  )
}
