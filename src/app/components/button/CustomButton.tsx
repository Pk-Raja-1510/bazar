import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  TextStyle,
  View,
  StyleProp,
} from 'react-native';

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  color: string;
  bgColor: string;
  borderColor?: string;
  size: 'small' | 'medium' | 'large';
  borderWidth?: number;
  icon?: JSX.Element;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  bgColor,
  borderColor,
  color,
  size,
  borderWidth,
  icon,
  borderRadius,
  style,
}) => {
  const buttonStyles: ViewStyle = {
    width: size === 'small' ? 65 : size === 'large' ? '100%' : 92,
    backgroundColor: bgColor,
    paddingVertical: size === 'small' ? 8 : size === 'large' ? 12 : 8,
    paddingHorizontal: 20,
    borderRadius:
      borderRadius || size === 'small' ? 16 : size === 'large' ? 48 : 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: borderWidth || 0,
    borderColor: borderColor,
    gap: 16,
  };

  const textStyles: TextStyle = {
    color: color,
    fontSize: size === 'small' ? 12 : size === 'large' ? 16 : 14,
    fontFamily: 'roboto',
    fontWeight: size === 'small' ? '500' : size === 'large' ? '700' : '700',
    lineHeight: size === 'small' ? 16 : size === 'large' ? 24 : 20,
    letterSpacing: 0.3,
  };

  return (
    <TouchableOpacity onPress={onPress} style={[buttonStyles, style]}>
      {icon && <View>{icon}</View>}
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
