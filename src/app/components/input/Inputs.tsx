import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface InputFieldProps {
  label: string;
  placeholder: string;
  value?: string;
  onChangeText?: () => void;
  secureTextEntry?: boolean;
  leftInputIcon?: JSX.Element;
  RightInputIcon?: JSX.Element;
  style?: StyleProp<ViewStyle>;
  borderWidth?: number;
  keyboardType?: KeyboardTypeOptions;
}

const Inputs: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  leftInputIcon,
  RightInputIcon,
  style,
  borderWidth,
  keyboardType,
}) => {
  const paddingLeftValue = leftInputIcon ? 48 : 16;
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      {leftInputIcon && (
        <TouchableOpacity style={styles.leftInputIcon}>
          {leftInputIcon}
        </TouchableOpacity>
      )}
      <TextInput
        style={[
          styles.input,
          {paddingLeft: paddingLeftValue, borderWidth: borderWidth || 0},
        ]}
        placeholder={placeholder}
        placeholderTextColor="#B8B8B8"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
      {RightInputIcon && (
        <TouchableOpacity style={styles.rightInputIcon}>
          {RightInputIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'roboto',
    color: '#121212',
    fontSize: 14,
    marginBottom: 6,
    fontWeight: '500',
    lineHeight: 19.6,
  },

  input: {
    fontFamily: 'roboto',
    borderColor: '#54408C',
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#121212',
    fontWeight: '500',
    lineHeight: 24,
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
  },
  leftInputIcon: {
    position: 'absolute',
    left: 12,
    bottom: 16,
    zIndex: 100,
  },
  rightInputIcon: {
    position: 'absolute',
    right: 16,
    bottom: 16,
  },
});

export default Inputs;
