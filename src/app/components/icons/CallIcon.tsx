import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import Svg, {NumberProp, Path} from 'react-native-svg';

interface CallIconProps {
  color: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
  useStroke: boolean;
}

export const CallIcon: React.FC<CallIconProps> = ({
  height,
  width,
  color,
  useStroke,
}) => {
  return (
    <Svg
      width={width || '19'}
      height={height || '19'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.53174 10.4724C13.5208 14.4604 14.4258 9.84672 16.9656 12.3848C19.4143 14.8328 20.8216 15.3232 17.7192 18.4247C17.3306 18.737 14.8616 22.4943 6.1846 13.8197C-2.49348 5.144 1.26158 2.67244 1.57397 2.28395C4.68387 -0.826154 5.16586 0.589383 7.61449 3.03733C10.1544 5.5765 5.54266 6.48441 9.53174 10.4724Z"
        fill={useStroke ? 'none' : color}
        stroke={useStroke ? color : 'none'}
        strokeWidth={2}
      />
    </Svg>
  );
};