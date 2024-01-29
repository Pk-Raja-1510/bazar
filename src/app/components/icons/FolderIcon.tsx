import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface FolderIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const FolderIcon: React.FC<FolderIconProps> = ({
  color,
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || '20'}
      height={height || '20'}
      viewBox="0 0 20 20"
      fill="none">
      <Path
        d="M11.4499 2.88017H14.5199C18.2099 2.88017 20.0099 4.85017 19.9999 8.89017V13.7602C19.9999 17.6202 17.6199 20.0002 13.7499 20.0002H6.23988C2.38988 20.0002 -0.00012207 17.6202 -0.00012207 13.7502V6.24017C-0.00012207 2.10017 1.83988 0.000170661 5.46988 0.000170661H7.04988C7.98088 -0.00982934 8.84988 0.420171 9.41988 1.15017L10.2999 2.32017C10.5799 2.67017 10.9999 2.88017 11.4499 2.88017ZM5.36988 13.2902H14.6299C15.0399 13.2902 15.3699 12.9502 15.3699 12.5402C15.3699 12.1202 15.0399 11.7902 14.6299 11.7902H5.36988C4.94988 11.7902 4.61988 12.1202 4.61988 12.5402C4.61988 12.9502 4.94988 13.2902 5.36988 13.2902Z"
        fill={color || '#121212'}
      />
    </Svg>
  );
};