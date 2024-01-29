import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/app/screens/HomeScreen';
import OnBoardingScreen from './src/app/screens/OnboardingScreen';
import SignInScreen from './src/app/screens/SignInScreen';
import SignUpScreen from './src/app/screens/SignUpScreen';
import SuccessVerification from './src/app/screens/SuccessVerificaton';
import VerificationCodeScreen from './src/app/screens/VerificationEmail';
import VerificationPhoneScreen from './src/app/screens/VerificationPhone';

function App(): React.ReactElement {
  type screenPropType = {
    Home: undefined;
    OnboardingScreen: undefined;
    SignIn: undefined;
    SignUp: undefined;
    VerificationCode: {propKey?: string};
    sucessVerification: undefined;
    VerificationPhone: undefined;
  };
  const Stack = createStackNavigator<screenPropType>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="OnboardingScreen"
          component={OnBoardingScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="VerificationCode"
          component={VerificationCodeScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="sucessVerification"
          component={SuccessVerification}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="VerificationPhone"
          component={VerificationPhoneScreen}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
