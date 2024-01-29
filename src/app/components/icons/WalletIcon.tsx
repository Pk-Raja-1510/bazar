import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface WalletIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const WalletIcon: React.FC<WalletIconProps> = ({
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
        d="M15.7689 5.3818H20C20 1.98459 17.9644 0 14.5156 0H5.48444C2.03556 0 0 1.98459 0 5.33847V12.6615C0 16.0154 2.03556 18 5.48444 18H14.5156C17.9644 18 20 16.0154 20 12.6615V12.3495H15.7689C13.8052 12.3495 12.2133 10.7975 12.2133 8.883C12.2133 6.96849 13.8052 5.41647 15.7689 5.41647V5.3818ZM15.7689 6.87241H19.2533C19.6657 6.87241 20 7.19834 20 7.60039V10.131C19.9952 10.5311 19.6637 10.8543 19.2533 10.8589H15.8489C14.8548 10.872 13.9855 10.2084 13.76 9.26432C13.6471 8.67829 13.8056 8.07357 14.1931 7.61222C14.5805 7.15087 15.1573 6.88007 15.7689 6.87241ZM15.92 9.53298H16.2489C16.6711 9.53298 17.0133 9.1993 17.0133 8.78767C17.0133 8.37605 16.6711 8.04237 16.2489 8.04237H15.92C15.7181 8.04005 15.5236 8.11664 15.38 8.25504C15.2364 8.39344 15.1555 8.58213 15.1556 8.77901C15.1555 9.19205 15.4964 9.52823 15.92 9.53298ZM4.73778 5.3818H10.3822C10.8044 5.3818 11.1467 5.04812 11.1467 4.63649C11.1467 4.22487 10.8044 3.89119 10.3822 3.89119H4.73778C4.31903 3.89116 3.9782 4.2196 3.97333 4.62783C3.97331 5.04087 4.31415 5.37705 4.73778 5.3818Z"
        fill={color || '#121212'}
      />
    </Svg>
  );
};