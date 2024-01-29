import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface GoogleIconProps {
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const GoogleIcon: React.FC<GoogleIconProps> = ({
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || 16}
      height={height || 16}
      viewBox={`0 0 ${width || 16} ${height || 16}`}
      fill="none">
      <Path
        d="M15.8442 8.18429C15.8442 7.64047 15.8001 7.09371 15.706 6.55872H8.16016V9.63937H12.4813C12.302 10.6329 11.7258 11.5119 10.8822 12.0704V14.0693H13.4602C14.9741 12.6759 15.8442 10.6182 15.8442 8.18429Z"
        fill="#3784FB"
      />
      <Path
        d="M8.16023 16.0005C10.3179 16.0005 12.1375 15.2921 13.4632 14.0692L10.8852 12.0703C10.1679 12.5583 9.24199 12.8346 8.16317 12.8346C6.07609 12.8346 4.30647 11.4266 3.67153 9.53351H1.01123V11.5941C2.36931 14.2956 5.13543 16.0005 8.16023 16.0005Z"
        fill="#34A853"
      />
      <Path
        d="M3.66852 9.53356C3.33341 8.53999 3.33341 7.46411 3.66852 6.47054V4.40991H1.01116C-0.123511 6.67043 -0.123511 9.33367 1.01116 11.5942L3.66852 9.53356Z"
        fill="#F5BE00"
      />
      <Path
        d="M8.16023 3.16644C9.30078 3.1488 10.4031 3.57798 11.2291 4.36578L13.5132 2.08174C12.0669 0.72367 10.1474 -0.0229773 8.16023 0.000539111C5.13543 0.000539111 2.36931 1.70548 1.01123 4.40987L3.66859 6.4705C4.30059 4.57449 6.07315 3.16644 8.16023 3.16644Z"
        fill="#EF5A56"
      />
    </Svg>
  );
};
