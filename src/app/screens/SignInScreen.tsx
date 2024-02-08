import {StyleSheet, Text, View} from 'react-native';
import {LeftArrowIcon} from '../components/icons/LeftArrowIcon';
import Texts from '../components/texts';
import Inputs from '../components/input/Inputs';
import {EyeIcon} from '../components/icons/EyeIcon';
import CustomButton from '../components/button/CustomButton';
import Line from '../components/line';
import {GoogleIcon} from '../components/icons/GoogleIcon';
import {AppleIcon} from '../components/icons/AppleIcon';
import PromptText from '../components/promptText';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <LeftArrowIcon styles={{marginTop: 16, marginBottom: 8}} />
      <Texts
        title="Welcome Back 👋"
        content="Sign to your account"
        style={{marginTop: 16}}
      />
      <Inputs
        label={'Email'}
        placeholder={'Email Your email'}
        style={{marginTop: 24}}
        secureTextEntry={false}
      />
      <Inputs
        label={'Password'}
        placeholder={'Your password'}
        secureTextEntry={true}
        RightInputIcon={<EyeIcon color={'#B8B8B8'} />}
      />
      <Text style={styles.forget} onPress={()=>navigation.navigate('ForgetPasswordScreen')}>Forgot Password?</Text>
      <CustomButton
        title={'Login'}
        color={'#fff'}
        bgColor={'#54408C'}
        size={'large'}
      />
      <PromptText
        title="Don’t have an account?"
        link="Sign Up"
        onPress={() => navigation.navigate('SignUp')}
      />
      <Line style={{marginVertical: 26}}>
        <Text style={styles.customText}>Or with</Text>
      </Line>
      <CustomButton
        title={'Sign in with Google'}
        color={'#121212'}
        bgColor={'#ffffff'}
        size={'large'}
        borderWidth={1}
        borderColor="#E8E8E8"
        style={{marginBottom: 8}}
        icon={<GoogleIcon />}
      />
      <CustomButton
        title={'Sign in with Apple'}
        color={'#121212'}
        bgColor={'#ffffff'}
        size={'large'}
        borderWidth={1}
        borderColor="#E8E8E8"
        icon={<AppleIcon />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
  },
  forget: {
    color: '#54408C',
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 19,
    marginBottom: 24,
  },
  customText: {
    color: '#A6A6A6',
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 19,
    marginHorizontal: 7,
  },
});
export default SignInScreen;
