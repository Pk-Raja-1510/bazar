import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import PromptText from '../promptText';
import CustomButton from '../button/CustomButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';

interface VerificationCodeInputProps {
  onPress?: () => void;
}

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  onPress,
}) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [code, setCode] = useState<string>('');
  const inputRefs: React.RefObject<TextInput>[] = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const handleCodeChange = (text: string, index: number) => {
    // Validate input to only accept digits
    if (/^\d*$/.test(text)) {
      setCode(prevCode => {
        const newCode = prevCode.split('');
        newCode[index] = text.charAt(text.length - 1);
        return newCode.join('');
      });

      // Move to the next input
      if (index < inputRefs.length - 1 && text.length > 0) {
        inputRefs[index + 1].current?.focus();
      }
    }
  };

  const handleBackspace = (index: number) => {
    // Move to the previous input on backspace
    if (index > 0) {
      setCode(prevCode => {
        const newCode = prevCode.split('');
        newCode[index - 1] = '';
        return newCode.join('');
      });
      inputRefs[index - 1].current?.focus();
    }
  };

  const renderCodeInputs = () => {
    return Array.from({length: 4}, (_, index) => (
      <TextInput
        key={index}
        ref={inputRefs[index]}
        style={styles.input}
        maxLength={1}
        keyboardType="numeric"
        value={code[index]}
        onChangeText={text => handleCodeChange(text, index)}
        onKeyPress={({nativeEvent}) => {
          // Handle backspace key
          if (nativeEvent.key === 'Backspace') {
            handleBackspace(index);
          }
        }}
      />
    ));
  };

  // const handleVerifyCode = () => {
  // Perform verification logic with the entered code
  // console.log('Verifying code:', code);
  // navigation.navigate('VerificationPhone');
  // You can add your verification logic here
  // };

  return (
    <>
      <View style={styles.container}>{renderCodeInputs()}</View>
      {/* <Button title="Verify Code" onPress={handleVerifyCode} /> */}
      <PromptText
        title="If you didn’t receive a code?"
        link=" Resend"
        onPress={() => navigation.navigate('SignUp')}
        style={{fontSize: 14, fontWeight: '600'}}
      />
      <CustomButton
        title={'Continue'}
        color={'#fff'}
        bgColor={'#54408C'}
        size={'large'}
        style={{marginTop: 43}}
        onPress={onPress}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    gap: 16,
  },
  input: {
    width: 52,
    height: 52,
    paddingVertical: 10,
    paddingHorizontal: 18,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderColor: 'black',
    textAlign: 'center',
    fontWeight: '700',
    fontFamily: 'open sans',
    fontSize: 24,
  },
});

export default VerificationCodeInput;
