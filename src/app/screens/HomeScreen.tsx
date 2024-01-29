import React from 'react';
import AppLogo from '../components/logo/AppLogo';
import {Text, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

import {NavigationProp, useNavigation} from '@react-navigation/native';

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const goToOnboarding: () => void = () => {
    navigation.navigate('OnboardingScreen');
  };

  return (
    <>
      <StatusBar backgroundColor={'#54408C'} />
      <TouchableOpacity style={styles.container} onPress={goToOnboarding}>
        <AppLogo width={38} height={38} />
        <Text style={styles.logoTitle}>Bazar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    gap: 12.62,
    backgroundColor: '#54408C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoTitle: {
    fontFamily: 'roboto',
    fontSize: 31.54,
    fontWeight: '700',
    lineHeight: 44,
    color: '#FFFFFF',
  },
});

export default HomeScreen;
