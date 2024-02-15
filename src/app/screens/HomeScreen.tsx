import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SearchIcon } from "../components/icons/SearchIcon";
import { NotificationIcon } from "../components/icons/NotificationIcon";
import CustomButton from "../components/button/CustomButton";
const HomeScreen = () => {
  const TopOfWeekData = [
    {
      id: 1,
      image: require("../../../assets/images/top-of-week/1.png"),
      name: "The Kite Runner",
      rate: "$14.99",
    },
    {
      id: 2,
      image: require("../../../assets/images/top-of-week/2.png"),
      name: "The Kite Runner",
      rate: "$20.99",
    },
    {
      id: 3,
      image: require("../../../assets/images/top-of-week/3.jpg"),
      name: "The Kite Runner",
      rate: "$18.99",
    },
  ];
  const VendorData = [
    require("../../../assets/images/vendors/1.png"),
    require("../../../assets/images/vendors/2.png"),
    require("../../../assets/images/vendors/3.png"),
    require("../../../assets/images/vendors/4.png"),
    require("../../../assets/images/vendors/5.png"),
    require("../../../assets/images/vendors/6.png"),
    require("../../../assets/images/vendors/7.png"),
    require("../../../assets/images/vendors/8.png"),
    require("../../../assets/images/vendors/9.png"),
  ];
  const AuthorData = [
    {
      id: 1,
      name: "Tess Gunty",
      image: require("../../../assets/images/Authors/1.jpg"),
      position: "Novelist",
    },
    {
      id: 2,
      name: "John Freeman",
      image: require("../../../assets/images/Authors/2.jpg"),
      position: "Writer",
    },
    {
      id: 3,
      name: "Adam Dalva",
      image: require("../../../assets/images/Authors/3.jpg"),
      position: "Writer",
    },
    {
      id: 4,
      name: "John Freeman",
      image: require("../../../assets/images/Authors/4.jpeg"),
      position: "Novelist",
    },
    {
      id: 5,
      name: "Adam Dalva",
      image: require("../../../assets/images/Authors/5.jpeg"),
      position: "Writer",
    },
    {
      id: 6,
      name: "Tess Gunty",
      image: require("../../../assets/images/Authors/6.jpeg"),
      position: "Novelist",
    },
    {
      id: 7,
      name: "John Freeman",
      image: require("../../../assets/images/Authors/7.jpeg"),
      position: "Writer",
    },
  ];
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <SearchIcon />
        <Text style={styles.homeText}>Home</Text>
        <NotificationIcon />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 24,
          marginBottom: 17,
        }}
      >
        <View style={{ paddingLeft: 25 }}>
          <Text style={styles.homeText}>Special Offer</Text>
          <Text style={{ marginBottom: 15 }}>Discount 25%</Text>
          <CustomButton
            title={"Order Now"}
            color={"#fff"}
            bgColor={"#54408C"}
            size={"small"}
            style={{ width: 118 }}
          />
        </View>
        <Image
          source={require("../../../assets/images/home/1.jpg")}
          style={{ width: 100, height: 145, borderRadius: 4 }}
        />
      </View>
      <View
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.homeText}>Top of Week</Text>
        <Text
          style={{
            color: "#54408C",
            fontSize: 14,
            fontWeight: "700",
            lineHeight: 19.6,
          }}
        >
          See all
        </Text>
      </View>
      <FlatList
        data={TopOfWeekData}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 198,
              width: 127,
              paddingLeft: 24,
              marginRight: 24,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 127, height: 150, borderRadius: 4 }}
            />
            <Text>{item.name}</Text>
            <Text>{item.rate}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.homeText}>Best Vendors</Text>
        <Text
          style={{
            color: "#54408C",
            fontSize: 14,
            fontWeight: "700",
            lineHeight: 19.6,
          }}
        >
          See all
        </Text>
      </View>
      <FlatList
        data={VendorData}
        renderItem={({ item }) => (
          <View style={{ marginRight: 10 }}>
            <Image
              source={item}
              style={{ resizeMode: "contain", width: 70, height: 40 }}
            />
          </View>
        )}
        keyExtractor={(index) => index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      />
      <View
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.homeText}>Authors</Text>
        <Text
          style={{
            color: "#54408C",
            fontSize: 14,
            fontWeight: "700",
            lineHeight: 19.6,
          }}
        >
          See all
        </Text>
      </View>
      <FlatList
        data={AuthorData}
        renderItem={({ item, index }) => (
          <View
            style={{
              height: 183,
              width: 127,
              paddingLeft: 24,
              marginRight: 24,
              marginBottom: 50,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 102, height: 102, borderRadius: 50 }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "500",
                fontFamily: "roboto",
                lineHeight: 24,
                color: "#121212",
              }}
            >
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                fontFamily: "roboto",
                lineHeight: 19.6,
                color: "##A6A6A6",
              }}
            >
              {item.position}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "opensans",
    lineHeight: 28,
    color: "#121212",
  },
});

export default HomeScreen;
