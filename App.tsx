import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from './src/app/screens/OnboardingScreen';
import SignInScreen from './src/app/screens/SignInScreen';
import SignUpScreen from './src/app/screens/SignUpScreen';
import SuccessVerification from './src/app/screens/SuccessVerificaton';
import VerificationCodeScreen from './src/app/screens/VerificationEmail';
import VerificationPhoneScreen from './src/app/screens/VerificationPhone';
import ForgetPasswordScreen from './src/app/screens/ForgetPasswordScreen';
import ResetPasswordScreen from './src/app/screens/ResetPassword';
import NewPasswordScreen from './src/app/screens/NewPassword';
import SpashScreen from './src/app/screens/SpashScreen';
import HomeScreen from './src/app/screens/HomeScreen';
import BottomTab from './src/app/screens/BottomTab';

const Stack = createStackNavigator();



function App(): React.ReactElement {
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='SpashScreen'
          component={SpashScreen}
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
        <Stack.Screen
         name='BottomTab'
         component={BottomTab}
         options={{title: '', headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
