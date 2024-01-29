import {StyleSheet, Text, View} from 'react-native';
import {LeftArrowIcon} from '../components/icons/LeftArrowIcon';
import Texts from '../components/texts';
import Inputs from '../components/input/Inputs';
import {EyeIcon} from '../components/icons/EyeIcon';
import CustomButton from '../components/button/CustomButton';
import PromptText from '../components/promptText';
import ValidationText from '../components/validationText';
import {XIcon} from '../components/icons/XIcon';
import {CheckIcon} from '../components/icons/CheckIcon';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const Navigation = useNavigation<NavigationProp<any>>();

  const handlePress = () => {
    Navigation.navigate('VerificationCode', {propKey: 'Email'});
  };
  return (
    <View style={styles.container}>
      <View>
        <LeftArrowIcon styles={{marginTop: 16, marginBottom: 8}} />
        <Texts
          title="Sign Up"
          content="Create account and choose favorite menu"
          style={{marginTop: 16}}
        />
        <Inputs
          label={'Name'}
          placeholder={'Your name'}
          style={{marginTop: 24}}
          secureTextEntry={false}
        />
        <Inputs
          label={'Email'}
          placeholder={'Email Your email'}
          secureTextEntry={false}
        />
        <Inputs
          label={'Password'}
          placeholder={'Your password'}
          secureTextEntry={true}
          RightInputIcon={<EyeIcon color={'#B8B8B8'} />}
        />
        <ValidationText text={'Minimum 8 characters'}>
          <XIcon width={16} height={16} color={'#EF5A56'} />
        </ValidationText>
        <ValidationText text={'Atleast 1 number (1-9)'}>
          <CheckIcon width={16} height={16} color={'#A28CE0'} />
        </ValidationText>
        <ValidationText
          text={'Atleast lowercase or uppercase letters'}
          style={{marginBottom: 24}}>
          <CheckIcon width={16} height={16} color={'#A28CE0'} />
        </ValidationText>
        <CustomButton
          title={'Register'}
          color={'#fff'}
          bgColor={'#54408C'}
          size={'large'}
          onPress={handlePress}
        />
        <PromptText
          title="Have an account?"
          link="Sign In"
          onPress={() => Navigation.navigate('SignIn')}
        />
      </View>
      <View style={styles.promptTextContainer}>
        <Text style={styles.promptText}>
          By clicking Register, you agree to our
        </Text>
        <Text style={styles.link}>Terms and Data Policy.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
  },
  promptTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20,
  },
  promptText: {
    color: '#A6A6A6',
    textAlign: 'center',
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
  link: {
    color: '#54408C',
    textAlign: 'center',
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 19.6,
  },
});
export default SignUpScreen;
