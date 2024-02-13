import {View, Image, StyleSheet} from 'react-native';
import Texts from '../components/texts';
import CustomButton from '../components/button/CustomButton';
import { NavigationProp, useNavigation } from '@react-navigation/core';

interface SuccessVerificationProps{
  route: any;
  propKey?: string;
}

const SuccessVerification = (props:SuccessVerificationProps) => {
  const navigation=useNavigation<NavigationProp<any>>();
  const propKey = props.route.params.propKey;
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/success.png')} />
      {
        propKey && propKey==='PasswordChanged'?(
          <>
          <Texts
        title="Password Changed! "
        content="Password changed successfully, you can login again with a new password"
        contentStyle={{
          textAlign: 'center',
        }}
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}
      />
      <CustomButton
        title={'Login'}
        color={'#FFF'}
        bgColor={'#54408C'}
        size={'large'}
        style={{marginTop: 40}}
        onPress={() => navigation.navigate('HomeScreen')}
      />
          </>
        ):(
          <>
          <Texts
        title="Congratulation! "
        content="your account is complete, please enjoy the best menu from us."
        contentStyle={{
          textAlign: 'center',
        }}
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}
      />
      <CustomButton
        title={'Get Started'}
        color={'#FFF'}
        bgColor={'#54408C'}
        size={'large'}
        style={{marginTop: 40}}
      />
          </>
        )
      }
      
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
  },
});
export default SuccessVerification;
