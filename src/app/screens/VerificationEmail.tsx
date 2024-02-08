import { StyleSheet, View } from "react-native";
import { LeftArrowIcon } from "../components/icons/LeftArrowIcon";
import Texts from "../components/texts";
import VerificationCodeInput from "../components/verificatonCode";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface VerificationCodeScreenparamsType {
  route?: any;
  propKey?: string;
}

const VerificationCodeScreen = (props: VerificationCodeScreenparamsType) => {
  const propKey = props.route.params.propKey;
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <LeftArrowIcon
        styles={{ marginTop: 16, marginBottom: 8 }}
        onPress={() => navigation.goBack()}
      />
      {propKey && propKey === "Email" ? (
        <>
          <Texts
            title="Verification Email"
            content="Please enter the code we just sent to email"
            contentStyle={{
              textAlign: "center",
            }}
            style={{ marginTop: 16, display: "flex", alignItems: "center" }}
            span={" Johndoe@gmail.com"}
          />
          <VerificationCodeInput
            onPress={() => navigation.navigate("VerificationPhone")}
          />
        </>
      ) : propKey && propKey === "Phone" ? (
        <>
          <Texts
            title="Verification Phone"
            content="Please enter the code we just sent to phone number "
            contentStyle={{
              textAlign: "center",
            }}
            style={{ marginTop: 16, display: "flex", alignItems: "center" }}
            span={"(+20) 123477092 299"}
          />
          <VerificationCodeInput
            onPress={() => navigation.navigate("sucessVerification")}
          />
        </>
      ) : propKey && propKey === "ResetEmail" ? (
        <>
          <Texts
            title="Verification Code"
            content="Please enter the code we just sent to email"
            contentStyle={{
              textAlign: "center",
            }}
            style={{ marginTop: 16, display: "flex", alignItems: "center" }}
            span={" Johndoe@gmail.com"}
          />
          <VerificationCodeInput
            onPress={() => navigation.navigate("NewPasswordScreen")}
          />
        </>
      ) : (
        propKey &&
        propKey === "ResetPhone" && (
          <>
            <Texts
              title="Verification Code"
              content="Please enter the code we just sent to phone number "
              contentStyle={{
                textAlign: "center",
              }}
              style={{ marginTop: 16, display: "flex", alignItems: "center" }}
              span={"(+20) 123477092 299"}
            />
            <VerificationCodeInput
              onPress={() => navigation.navigate("NewPasswordScreen")}
            />
          </>
        )
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: "#FFFFFF",
  },
  forget: {
    color: "#54408C",
    fontFamily: "roboto",
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 19,
    marginBottom: 24,
  },
  customText: {
    color: "#A6A6A6",
    fontFamily: "roboto",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19,
    marginHorizontal: 7,
  },
});
export default VerificationCodeScreen;
