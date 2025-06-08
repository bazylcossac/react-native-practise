import {Tabs} from "expo-router"
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: "teal"}}>
      <Tabs.Screen name="index" options={{tabBarIcon: ({color}) => <FontAwesome6 name="boxes-stacked" size={24} color={color} />}}/>
      <Tabs.Screen name="edit" options={{tabBarIcon: ({color}) => <AntDesign name="edit" size={24} color={color} />}}/>
    </Tabs>
  )
}
