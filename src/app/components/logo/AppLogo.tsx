import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface AppLogoProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const AppLogo: React.FC<AppLogoProps> = ({
  color,
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || '24'}
      height={height || '26'}
      viewBox={`0 0 ${width || '24'} ${height || '26'}`}
      fill="none">
      <Path
        d="M25.7061 37.9721C25.7061 37.9721 22.1435 28.6535 25.7061 25.1157C29.2439 21.6025 38.4731 25.1157 38.4731 25.1157L38.4731 12.795C31.42 12.795 25.7061 7.08109 25.7061 0.0279535L13.3854 0.027953C13.3854 0.027953 16.9109 9.2695 13.3854 12.795C9.85986 16.3206 0.618315 12.795 0.618315 12.795L0.618315 25.1157C7.67145 25.1157 13.3854 30.9189 13.3854 37.9721L25.7061 37.9721Z"
        fill={color || '#ffffff'}
      />
    </Svg>
  );
};

export default AppLogo;
