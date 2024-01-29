import React, {useState} from 'react';
import {StyleSheet, View, ImageSourcePropType} from 'react-native';
import AnimatedDotsCarousel from 'react-native-animated-dots-carousel';
import OnBoarding from '../onBoarding';
import CustomButton from '../button/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
export interface OnBoardingItem {
  id: number;
  image: ImageSourcePropType;
  title: string;
  content: string;
  button: string;
  //   onPress: () => void;
}
const LENGTH = 3;

const OnBoardingCarousel: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  const increaseIndex = () => {
    setIndex(Math.min(index + 1, LENGTH - 1));
  };
  const navigation = useNavigation<NavigationProp<any>>();

  const goToSignIn: () => void = () => {
    navigation.navigate('SignIn');
  };
  const onBoardingData: OnBoardingItem[] = [
    {
      id: 1,
      image: require('../../../../assets/images/onboarding2.png'),
      title: 'Now reading books will be easier',
      content:
        'Discover new worlds, join a vibrant reading community. Start your reading adventure effortlessly with us.',
      button: 'Continue',
    },
    {
      id: 2,
      image: require('../../../../assets/images/onboarding3.png'),
      title: 'Your Bookish Soulmate Awaits',
      content:
        'Let us be your guide to the perfect read. Discover books tailored to your tastes for a truly rewarding experience.',
      button: 'Get Started',
    },
    {
      id: 3,
      image: require('../../../../assets/images/onboarding4.png'),
      title: 'Start Your Adventure',
      content:
        "Ready to embark on a quest for inspiration and knowledge? Your adventure begins now. Let's go!",
      button: 'Get Started',
    },
  ];

  return (
    <View style={styles.container}>
      <OnBoarding onBoardingData={onBoardingData} index={index} />
      <AnimatedDotsCarousel
        length={LENGTH}
        currentIndex={index}
        maxIndicators={3}
        interpolateOpacityAndColor={true}
        activeIndicatorConfig={{
          color: '#54408C',
          margin: 3,
          opacity: 1,
          size: 8,
        }}
        inactiveIndicatorConfig={{
          color: '#E8E8E8',
          margin: 3,
          opacity: 0.5,
          size: 8,
        }}
        decreasingDots={[
          {
            config: {color: 'white', margin: 3, opacity: 0.5, size: 6},
            quantity: 1,
          },
          {
            config: {color: 'white', margin: 3, opacity: 0.5, size: 4},
            quantity: 1,
          },
        ]}
      />

      <CustomButton
        title={index === 0 ? 'Continue' : 'Get Started'}
        bgColor="#54408C"
        color="#fff"
        size="large"
        borderRadius={12}
        onPress={increaseIndex}
        style={{marginTop: 34, marginBottom: 8}}
      />
      <CustomButton
        size={'large'}
        title="Sign in"
        bgColor="#FAF9FD"
        color="#54408C"
        borderRadius={12}
        onPress={goToSignIn}
        style={{marginBottom: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 3,
  },
});

export default OnBoardingCarousel;
