import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LeftArrowIcon } from "../components/icons/LeftArrowIcon";
import Texts from "../components/texts";
import CustomButton from "../components/button/CustomButton";
import Inputs from "../components/input/Inputs";
import { NavigationProp, useNavigation } from "@react-navigation/native";

interface ResetPasswordScreenProps {
  route: any;
  propKey?: string;
}

const ResetPasswordScreen = (props: ResetPasswordScreenProps) => {
  const navigation=useNavigation<NavigationProp<any>>()  
  const propKey = props.route.params.propKey;
  return (
    <View style={styles.container}>
      <LeftArrowIcon styles={{ marginTop: 16, marginBottom: 8 }} onPress={()=>navigation.goBack()}/>
      {propKey && propKey === "Email" ? (
        <>
          <Texts
            title="Reset Password"
            content="Please enter your email, we will send verification code to your email."
            style={{ marginTop: 16 }}
          />
          <Inputs
            label={"Email"}
            placeholder={"Enter Your Email"}
            style={{ marginVertical: 24 }}
          />
          <CustomButton
            title={"Send"}
            color={"#fff"}
            bgColor={"#54408C"}
            size={"large"}
            onPress={() => navigation.navigate('VerificationCode', { propKey :'ResetEmail'})}
          />
        </>
      ) : (
        <>
          <Texts
            title="Reset Password"
            content="Please enter your phone number, we will send a verification code to your phone number."
            style={{ marginTop: 16 }}
          />
          <Inputs
            label={"Phone Number"}
            placeholder={"(+965) 123 435 7565"}
            style={{ marginVertical: 24 }}
          />
          <CustomButton
            title={"Send"}
            color={"#fff"}
            bgColor={"#54408C"}
            size={"large"}
            onPress={() => navigation.navigate('VerificationCode', { propKey :'ResetPhone'})}
          />
        </>
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
});
export default ResetPasswordScreen;
