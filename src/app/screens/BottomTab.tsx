import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
// import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from "react-native";
import { HomeIcon } from "../components/icons/HomeIcon";
import { DocumentIcon } from "../components/icons/DocumentIcon";
import { ProfileIcon } from "../components/icons/ProfileIcon";
import { BuyIcon } from "../components/icons/BuyIcon";
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <>
      <View>
        <Text>hii</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          elevation: 0,
          height: 71,
          backgroundColor: "#fff",
          paddingHorizontal: 40,
          zIndex: 1000,
        }}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <HomeIcon color={"#54408C"} />
          <Text style={{ marginTop: 5, color: "#54408C" }}>Home</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <DocumentIcon />
          <Text style={{ marginTop: 5 }}>Category</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <BuyIcon />
          <Text style={{ marginTop: 5 }}>Cart</Text>
        </View>
        <View style={{ display: "flex", alignItems: "center" }}>
          <ProfileIcon />
          <Text style={{ marginTop: 5 }}>Profile</Text>
        </View>
      </View>
      {/*   <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown:false}}>
          <Tab.Screen name='HomeScreen' component={HomeScreen}/>
      </Tab.Navigator> */}
    </>
  );
};

export default BottomTab;
