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
import ForgetPasswordScreen from './src/app/screens/ForgetPasswordScreen';
import ResetPasswordScreen from './src/app/screens/ResetPassword';
import NewPasswordScreen from './src/app/screens/NewPassword';

function App(): React.ReactElement {
  type screenPropType = {
    Home: undefined;
    OnboardingScreen: undefined;
    SignIn: undefined;
    SignUp: undefined;
    VerificationCode: {propKey?: string};
    sucessVerification: undefined;
    VerificationPhone: undefined;
    ForgetPasswordScreen:undefined;
    ResetPasswordScreen:{propKey?: string};
    NewPasswordScreen:{propKey?: string};
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
         <Stack.Screen
          name="ForgetPasswordScreen"
          component={ForgetPasswordScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
          options={{title: '', headerShown: false}}
        />
        <Stack.Screen
          name="NewPasswordScreen"
          component={NewPasswordScreen}
          options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
