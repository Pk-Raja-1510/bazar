import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface CheckIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const CheckIcon: React.FC<CheckIconProps> = ({color, height, width}) => {
  return (
    <Svg
      width={width || '16'}
      height={height || '16'}
      viewBox="0 0 16 16"
      fill="none">
      <Path
        d="M3.3335 8.00002L6.66683 11.3334L13.3335 4.66669"
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
