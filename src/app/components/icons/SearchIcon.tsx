import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface SearchIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const SearchIcon: React.FC<SearchIconProps> = ({
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
        d="M11.55 20.1C16.272 20.1 20.1 16.272 20.1 11.55C20.1 6.82797 16.272 3 11.55 3C6.82797 3 3 6.82797 3 11.55C3 16.272 6.82797 20.1 11.55 20.1Z"
        stroke={color || '#121212'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 21L19.2 19.2"
        stroke={color || '#121212'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
