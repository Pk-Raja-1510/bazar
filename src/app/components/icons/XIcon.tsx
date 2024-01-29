import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface XIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  style?: StyleProp<ViewStyle>;
}

export const XIcon: React.FC<XIconProps> = ({color, height, width, style}) => {
  return (
    <Svg
      style={style}
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d="M18 6L6 18"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L18 18"
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
