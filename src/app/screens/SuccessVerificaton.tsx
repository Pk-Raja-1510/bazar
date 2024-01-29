import {View, Image, StyleSheet} from 'react-native';
import Texts from '../components/texts';
import CustomButton from '../components/button/CustomButton';

const SuccessVerification = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/success.png')} />
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
