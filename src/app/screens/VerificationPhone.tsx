import {StyleSheet, View} from 'react-native';
import {LeftArrowIcon} from '../components/icons/LeftArrowIcon';
import Texts from '../components/texts';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import Inputs from '../components/input/Inputs';
import {CallIcon} from '../components/icons/CallIcon';
import CustomButton from '../components/button/CustomButton';

const VerificationPhoneScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <LeftArrowIcon
        styles={{marginTop: 16, marginBottom: 8}}
        onPress={() => navigation.goBack()}
      />
      <Texts
        title="Phone Number"
        content="Please enter your phone number, so we can more easily deliver your order"
        contentStyle={{
          textAlign: 'center',
        }}
        style={{marginTop: 16, display: 'flex', alignItems: 'center'}}
      />
      <Inputs
        label={'Phone Number'}
        placeholder={'Your Number'}
        leftInputIcon={<CallIcon color={'#54408C'} useStroke={true} />}
        style={{marginTop: 24, marginBottom: 81}}
        keyboardType="numeric"
      />
      <CustomButton
        title={'Continue'}
        color={'#fff'}
        bgColor={'#54408C'}
        size={'large'}
        onPress={() => {
          navigation.navigate('VerificationCode', {propKey: 'PhoneNumber'});
        }}
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
export default VerificationPhoneScreen;
