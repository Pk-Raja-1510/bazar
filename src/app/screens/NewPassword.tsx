import React from "react";
import { StyleSheet, View } from "react-native";
import { LeftArrowIcon } from "../components/icons/LeftArrowIcon";
import Texts from "../components/texts";
import CustomButton from "../components/button/CustomButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { EyeIcon } from "../components/icons/EyeIcon";
import Inputs from "../components/input/Inputs";

const NewPasswordScreen = () => {
    const navigation=useNavigation<NavigationProp<any>>()

  return (
    <View style={styles.container}>
      <LeftArrowIcon styles={{ marginTop: 16, marginBottom: 8 }} onPress={()=>navigation.goBack()} />
      <Texts
        title="New Password"
        content="Create your new password, so you can login to your account."
        style={{ marginTop: 16 }}
      />
      <Inputs
        label={'Password'}
        placeholder={'Your password'}
        secureTextEntry={true}
        style={{marginTop:24, marginBottom:16}}
        RightInputIcon={<EyeIcon color={'#B8B8B8'} />
    }
      />
      <Inputs
        label={'Password'}
        placeholder={'Your password'}
        secureTextEntry={true}
        RightInputIcon={<EyeIcon color={'#B8B8B8'} />}
      />
      <CustomButton title={"Sent"} color={"#fff"} bgColor={"#54408C"} size={"large"} style={{marginTop:31}} onPress={()=>navigation.navigate('sucessVerification',{propKey:'PasswordChanged'})}/>
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
export default NewPasswordScreen;
