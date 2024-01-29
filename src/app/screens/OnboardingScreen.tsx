import {StatusBar, StyleSheet, Text, View} from 'react-native';
import OnBoardingCarousel from '../components/onBoardingCarousel';
import {NavigationProp, useNavigation} from '@react-navigation/native';
const OnBoardingScreen = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const goToHome: () => void = () => {
    navigation.navigate('Home');
  };
  return (
    <>
      <StatusBar backgroundColor={'#ffffff'} />
      <View style={styles.container}>
        <Text style={styles.skip} onPress={goToHome}>
          Skip
        </Text>
        <OnBoardingCarousel />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
  },
  skip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
    fontFamily: 'roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#54408C',
  },
});
export default OnBoardingScreen;
