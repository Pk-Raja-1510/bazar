import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp, Defs, ClipPath, Rect, G} from 'react-native-svg';
interface MinusIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const MinusIcon: React.FC<MinusIconProps> = ({color, height, width}) => {
  return (
    <Svg
      width={width || '24'}
      height={height || '24'}
      viewBox="0 0 24 24"
      fill="none">
      <Defs>
        <ClipPath id="clip0_297_8399">
          <Rect width={width || '24'} height={width || '24'} fill="white" />
        </ClipPath>
      </Defs>
      <G clipPath="url(#clip0_297_8399)">
        <Path
          d="M4.99984 12H18.9998"
          stroke={color || '#121212'}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};
