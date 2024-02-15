import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProfileIcon } from "../components/icons/ProfileIcon";
import { ArrowIcon } from "../components/icons/ArrowIcon";
import { LocationIcon } from "../components/icons/LocationIcon";
import { HeartIcon } from "../components/icons/HeartIcon";
import { DocumentIcon } from "../components/icons/DocumentIcon";
import { ChatIcon } from "../components/icons/ChatIcon";
import { BuyIcon } from "../components/icons/BuyIcon";

interface ProfileItem {
  id: number;
  iconComponent: JSX.Element;
  name: string;
  rightArrow: JSX.Element;
}
const Profile = () => {
  const profileData: ProfileItem[] = [
    {
      id: 1,
      iconComponent: <ProfileIcon color={"#54408C"} />,
      name: "My Account",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
    {
      id: 2,
      iconComponent: <LocationIcon location={"filled"} color={"#54408C"} />,
      name: "Address",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
    {
      id: 3,
      iconComponent: <BuyIcon color={"#54408C"} />,
      name: "Offers & Promos",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
    {
      id: 4,
      iconComponent: <HeartIcon color={"#54408C"} />,
      name: "Your Favorites",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
    {
      id: 5,
      iconComponent: <DocumentIcon color={"#54408C"} />,
      name: "Order History",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
    {
      id: 6,
      iconComponent: <ChatIcon color={"#54408C"} />,
      name: "Help Center",
      rightArrow: <ArrowIcon direction={"right"} />,
    },
  ];
  const renderItem = ({ item }: { item: ProfileItem }) => (
    <View style={styles.item}>
      {item.iconComponent}
      <Text style={styles.itemText}>{item.name}</Text>
      {item.rightArrow}
    </View>
  );
  return (
    <ScrollView style={{ backgroundColor: "#fff",height:'100%'}}>
      <Text style={styles.homeText}>Profile</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: 1,
          borderBottomWidth: 1,
          borderColor: "#E8E8E8",
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <Image
            source={require("../../../assets/images/profile.jpg")}
            style={{ width: 60, height: 60, borderRadius: 50 }}
            resizeMode="cover"
          />
          <View>
            <Text
              style={{
                fontFamily: "opensans",
                fontSize: 16,
                fontWeight: "700",
                lineHeight: 24,
                color: "#121212",
              }}
            >
              John Doe
            </Text>
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                color: "#A6A6A6",
              }}
            >
              (+1) 234 567 890
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontFamily: "roboto",
            fontSize: 14,
            fontWeight: "700",
            lineHeight: 19.6,
            color: "#EF5A56",
          }}
        >
          Logout
        </Text>
      </View>
      <FlatList
        data={profileData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  homeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "opensans",
    lineHeight: 28,
    color: "#121212",
    textAlign: "center",
    paddingVertical: 30,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
  },
  itemText: {
    marginLeft: 10,
    flex: 1,
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "roboto",
    lineHeight: 24,
    color: "#121212",
    paddingLeft: 15,
  },
});
export default Profile;
