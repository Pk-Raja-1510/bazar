import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface CalendarIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const CalendarIcon: React.FC<CalendarIconProps> = ({
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
        d="M18.05 3.03H17.89V2.75C17.89 2.34 17.55 2 17.14 2C16.73 2 16.39 2.34 16.39 2.75V3.03H7.61V2.75C7.61 2.34 7.28 2 6.86 2C6.45 2 6.11 2.34 6.11 2.75V3.03H5.95C3.77 3.03 2 4.8 2 6.98V18.05C2 20.23 3.77 22 5.95 22H18.05C20.23 22 22 20.23 22 18.05V6.98C22 4.8 20.23 3.03 18.05 3.03ZM6 18.97C5.45 18.97 5 18.53 5 17.97C5 17.42 5.45 16.97 6 16.97C6.55 16.97 7 17.42 7 17.97C7 18.53 6.55 18.97 6 18.97ZM6 15.49C5.45 15.49 5 15.04 5 14.49C5 13.93 5.45 13.49 6 13.49C6.55 13.49 7 13.93 7 14.49C7 15.04 6.55 15.49 6 15.49ZM6 12C5.45 12 5 11.55 5 11C5 10.45 5.45 10 6 10C6.55 10 7 10.45 7 11C7 11.55 6.55 12 6 12ZM10 18.97C9.45 18.97 9 18.53 9 17.97C9 17.42 9.45 16.97 10 16.97C10.55 16.97 11 17.42 11 17.97C11 18.53 10.55 18.97 10 18.97ZM10 15.49C9.45 15.49 9 15.04 9 14.49C9 13.93 9.45 13.49 10 13.49C10.55 13.49 11 13.93 11 14.49C11 15.04 10.55 15.49 10 15.49ZM10 12C9.45 12 9 11.55 9 11C9 10.45 9.45 10 10 10C10.55 10 11 10.45 11 11C11 11.55 10.55 12 10 12ZM14 18.97C13.45 18.97 13 18.53 13 17.97C13 17.42 13.45 16.97 14 16.97C14.55 16.97 15 17.42 15 17.97C15 18.53 14.55 18.97 14 18.97ZM14 15.49C13.45 15.49 13 15.04 13 14.49C13 13.93 13.45 13.49 14 13.49C14.55 13.49 15 13.93 15 14.49C15 15.04 14.55 15.49 14 15.49ZM14 12C13.45 12 13 11.55 13 11C13 10.45 13.45 10 14 10C14.55 10 15 10.45 15 11C15 11.55 14.55 12 14 12ZM18 15.49C17.45 15.49 17 15.04 17 14.49C17 13.93 17.45 13.49 18 13.49C18.55 13.49 19 13.93 19 14.49C19 15.04 18.55 15.49 18 15.49ZM18 12C17.45 12 17 11.55 17 11C17 10.45 17.45 10 18 10C18.55 10 19 10.45 19 11C19 11.55 18.55 12 18 12ZM20.5 7.14999H3.5V6.98C3.5 5.63 4.6 4.53 5.95 4.53H6.11V4.81C6.11 5.23 6.45 5.56 6.86 5.56C7.28 5.56 7.61 5.23 7.61 4.81V4.53H16.39V4.81C16.39 5.23 16.73 5.56 17.14 5.56C17.55 5.56 17.89 5.23 17.89 4.81V4.53H18.05C19.4 4.53 20.5 5.63 20.5 6.98V7.14999Z"
        fill={color || '#121212'}
      />
    </Svg>
  );
};