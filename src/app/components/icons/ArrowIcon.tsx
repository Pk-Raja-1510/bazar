import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface ArrowIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
  direction: 'up' | 'down' | 'left' | 'right';
}

export const ArrowIcon: React.FC<ArrowIconProps> = ({
  color,
  height,
  width,
  direction,
}) => {
  const getArrowPath = () => {
    switch (direction) {
      case 'up':
        return 'M19.92 15.0499L13.4 8.52989C12.63 7.75989 11.37 7.75989 10.6 8.52989L4.07999 15.0499';
      case 'down':
        return 'M19.92 8.94995L13.4 15.47C12.63 16.24 11.37 16.24 10.6 15.47L4.08002 8.94995';
      case 'left':
        return 'M15 19.9201L8.48003 13.4001C7.71003 12.6301 7.71003 11.3701 8.48003 10.6001L15 4.08008';
      case 'right':
        return 'M8.90997 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.90997 4.08008';
      default:
        return '';
    }
  };
  return (
    <Svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Path
        d={getArrowPath()}
        stroke={color || '#121212'}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
