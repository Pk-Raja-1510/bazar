import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
// import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity, View } from "react-native";
import { HomeIcon } from "../components/icons/HomeIcon";
import { DocumentIcon } from "../components/icons/DocumentIcon";
import { ProfileIcon } from "../components/icons/ProfileIcon";
import { BuyIcon } from "../components/icons/BuyIcon";
import { useState } from "react";
import Category from "./Category";
import Cart from "./Cart";
import Profile from "./Profile";
const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const handleSelect = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <>
      <View>
        {selectedTab === "Home" && <HomeScreen />}
        {selectedTab === "Category" && <Category />}
        {selectedTab === "Cart" && <Cart/>}
        {selectedTab=== 'Profile' && <Profile/>}
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
          backgroundColor: "#FAFAFA",
          paddingHorizontal: 40,
          zIndex: 1000,
        }}
      >
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => handleSelect("Home")}
        >
          <HomeIcon color={selectedTab === "Home" ? "#54408C" : "#A6A6A6"} />
          <Text
            style={{
              marginTop: 5,
              color: selectedTab === "Home" ? "#54408C" : "#A6A6A6",
            }}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => handleSelect("Category")}
        >
          <DocumentIcon
            color={selectedTab === "Category" ? "#54408C" : "#A6A6A6"}
          />
          <Text
            style={{
              marginTop: 5,
              color: selectedTab === "Category" ? "#54408C" : "#A6A6A6",
            }}
          >
            Category
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => handleSelect("Cart")}
        >
          <BuyIcon color={selectedTab === "Cart" ? "#54408C" : "#A6A6A6"} />
          <Text
            style={{
              marginTop: 5,
              color: selectedTab === "Cart" ? "#54408C" : "#A6A6A6",
            }}
          >
            Cart
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ display: "flex", alignItems: "center" }}
          onPress={() => handleSelect("Profile")}
        >
          <ProfileIcon color={selectedTab === "Profile" ? "#54408C" : "#A6A6A6"} />
          <Text
            style={{
              marginTop: 5,
              color: selectedTab === "Profile" ? "#54408C" : "#A6A6A6",
            }}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default BottomTab;
