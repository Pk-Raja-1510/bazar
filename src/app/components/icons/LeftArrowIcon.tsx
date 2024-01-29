import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface LeftArrowIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const LeftArrowIcon: React.FC<LeftArrowIconProps> = ({
  color,
  height,
  width,
  styles,
  onPress,
}) => {
  return (
    <Svg
      onPress={onPress}
      style={styles}
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M9.57 5.92993L3.5 11.9999L9.57 18.0699"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.5 12H3.66998"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
