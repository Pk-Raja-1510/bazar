import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface PlusIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const PlusIcon: React.FC<PlusIconProps> = ({
  color,
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M11.9998 5V19"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.99984 12H18.9998"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
