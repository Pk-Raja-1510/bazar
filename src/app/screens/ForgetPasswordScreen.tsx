import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LeftArrowIcon } from "../components/icons/LeftArrowIcon";
import Texts from "../components/texts";
import ForgetCard from "../components/forgetCard";
import { EmailIcon } from "../components/icons/EmailIcon";
import { CallIcon } from "../components/icons/CallIcon";
import CustomButton from "../components/button/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";

const ForgetPasswordScreen = () => {
    const navigation=useNavigation<NavigationProp<any>>()
    const [selectedCard, setSelectedCard] =useState<string>('Email')

    const handleCardSelect = (card: string) => {
        setSelectedCard(card);
      };
  return (
    <View style={styles.container}>
      <LeftArrowIcon styles={{ marginTop: 16, marginBottom: 8 }} onPress={()=>navigation.goBack()} />
      <Texts
        title="Forgot Password"
        content="Select which contact details should we use to reset your password"
        style={{ marginTop: 16 }}
      />
      <View style={{flexDirection:'row', justifyContent:'space-between',marginTop:24,marginBottom:49}}>
        <ForgetCard icon={<EmailIcon/>} title={"Email"} isSelected={selectedCard === "Email"} subTitle={"Send to your email"} onPress={()=>handleCardSelect('Email')}/>
        <ForgetCard icon={<CallIcon color={"#B8B8B8"} useStroke={false}/>} title={"Phone Number"} isSelected={selectedCard === "Phone"} subTitle={"Send to your phone"} onPress={()=>handleCardSelect('Phone')}/>
      </View>
      <CustomButton title={"Continue"} color={"#fff"} bgColor={"#54408C"} size={"large"} onPress={()=>navigation.navigate('ResetPasswordScreen',{propKey: `${selectedCard}`})}/>
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
export default ForgetPasswordScreen;
