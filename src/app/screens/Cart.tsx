import { ScrollView, StyleSheet, Text, View } from "react-native";
import { NotificationIcon } from "../components/icons/NotificationIcon";
import { SearchIcon } from "../components/icons/SearchIcon";
import { LocationIcon } from "../components/icons/LocationIcon";
import { ArrowIcon } from "../components/icons/ArrowIcon";
import { CalendarIcon } from "../components/icons/CalendarIcon";
import { CardIcon } from "../components/icons/CardIcon";
import CustomButton from "../components/button/CustomButton";

const Cart = () => {
  return (
    <ScrollView style={{ backgroundColor: "#fff",padding:20 }}>
      <View style={styles.container}>
        <SearchIcon />
        <Text style={styles.homeText}>Confirm Order</Text>
        <NotificationIcon />
      </View>
      <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 24.3,
            fontFamily: "opensans",
            color: "#121212",
          }}
        >
          Address
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LocationIcon
            location={"filled"}
            color={"#54408C"}
            styles={{ marginHorizontal: 15, padding: 10 }}
          />
          <View style={{ width: 200 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                lineHeight: 24,
                fontFamily: "roboto",
                color: "#121212",
              }}
            >
              Utama Street No.20
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#A6A6A6",
              }}
            >
              Dumbo Street No.20, Dumbo, New York 10001, United States
            </Text>
            <Text
              style={{
                height: 36,
                width: 98,
                textAlign: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#54408C",
                marginTop: 15,
              }}
            >
              Change
            </Text>
          </View>
          <ArrowIcon direction={"right"} color={"#292929"} />
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 24.3,
            fontFamily: "opensans",
            color: "#121212",
            paddingTop: 20,
            paddingHorizontal: 20,
          }}
        >
          Summary
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            paddingVertical: 20,
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                color: "#121212",
              }}
            >
              Price
            </Text>
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                color: "#121212",
              }}
            >
              $87.10
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 5,
            }}
          >
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                color: "#121212",
              }}
            >
              Shipping
            </Text>
            <Text
              style={{
                fontFamily: "roboto",
                fontSize: 14,
                fontWeight: "400",
                lineHeight: 19.6,
                color: "#121212",
              }}
            >
              $2
            </Text>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 20,
            borderBottomWidth: 1,
            borderColor: "#E8E8E8",
          }}
        >
          <Text
            style={{
              fontFamily: "roboto",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 19.6,
              color: "#121212",
            }}
          >
            Total Payment
          </Text>
          <Text
            style={{
              color: "#121212",
              fontFamily: "roboto",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 19.6,
            }}
          >
            $89.10
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 10,
            padding: 20,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "roboto",
              fontSize: 14,
              fontWeight: "700",
              lineHeight: 19.6,
              color: "#54408C",
            }}
          >
            See details
          </Text>
          <ArrowIcon
            direction={"right"}
            width={16}
            height={16}
            color={"#54408C"}
          />
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 24.3,
            fontFamily: "opensans",
            color: "#121212",
          }}
        >
          Date and time
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <CalendarIcon
            color={"#54408C"}
            styles={{ marginHorizontal: 15, padding: 10 }}
          />
          <View style={{ width: 200 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#121212",
              }}
            >
              Date & time
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#7A7A7A",
              }}
            >
              Choose date and time
            </Text>
          </View>
          <ArrowIcon direction={"right"} color={"#292929"} />
        </View>
      </View>
      <View
        style={{
          marginBottom: 20,
          borderWidth: 1,
          borderColor: "#E8E8E8",
          padding: 20,
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "700",
            lineHeight: 24.3,
            fontFamily: "opensans",
            color: "#121212",
          }}
        >
          Payment
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <CardIcon
            color={"#54408C"}
            styles={{ marginHorizontal: 15, padding: 10 }}
          />
          <View style={{ width: 200 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "700",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#121212",
              }}
            >
              Payment
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "500",
                lineHeight: 19.6,
                fontFamily: "roboto",
                color: "#7A7A7A",
              }}
            >
              Choose your payment
            </Text>
          </View>
          <ArrowIcon direction={"right"} color={"#292929"} />
        </View>
      </View>
      <CustomButton
        title={"Order"}
        color={"#fff"}
        bgColor={"#54408C"}
        size={"large"}
        style={{
          marginBottom: 100,
        }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  homeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "opensans",
    lineHeight: 28,
    color: "#121212",
  },
});
export default Cart;
