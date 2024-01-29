import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface MessageIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const MessageIcon: React.FC<MessageIconProps> = ({
  color,
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || '20'}
      height={height || '18'}
      viewBox="0 0 20 18"
      fill="none">
      <Path
        d="M14.9394 0C16.2804 0 17.5704 0.53 18.5194 1.481C19.4694 2.43 20.0004 3.71 20.0004 5.05V12.95C20.0004 15.74 17.7304 18 14.9394 18H5.06043C2.26943 18 0.000427246 15.74 0.000427246 12.95V5.05C0.000427246 2.26 2.25943 0 5.06043 0H14.9394ZM16.5304 6.54L16.6104 6.46C16.8494 6.17 16.8494 5.75 16.5994 5.46C16.4604 5.311 16.2694 5.22 16.0704 5.2C15.8604 5.189 15.6604 5.26 15.5094 5.4L11.0004 9C10.4204 9.481 9.58943 9.481 9.00043 9L4.50043 5.4C4.18943 5.17 3.75943 5.2 3.50043 5.47C3.23043 5.74 3.20043 6.17 3.42943 6.47L3.56043 6.6L8.11043 10.15C8.67043 10.59 9.34943 10.83 10.0604 10.83C10.7694 10.83 11.4604 10.59 12.0194 10.15L16.5304 6.54Z"
        fill={color || '#121212'}
      />
    </Svg>
  );
};