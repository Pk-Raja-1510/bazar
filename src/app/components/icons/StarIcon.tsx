import React from 'react';
import {ColorValue, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path, NumberProp} from 'react-native-svg';

interface StarIconProps {
  color?: ColorValue;
  height?: NumberProp;
  width?: NumberProp;
  styles?: StyleProp<ViewStyle>;
}

export const StarIcon: React.FC<StarIconProps> = ({
  color,
  height,
  width,
  styles,
}) => {
  return (
    <Svg
      style={styles}
      width={width || '20'}
      height={height || '19'}
      viewBox="0 0 20 19"
      fill="none">
      <Path
        d="M8.75656 0.765246C8.8709 0.535534 9.04775 0.34213 9.26712 0.206899C9.48648 0.0716667 9.73962 0 9.9979 0C10.2562 0 10.5093 0.0716667 10.7287 0.206899C10.948 0.34213 11.1249 0.535534 11.2392 0.765246L13.5789 5.46751L18.8104 6.22121C19.0661 6.2578 19.3064 6.36465 19.5041 6.52968C19.7018 6.6947 19.849 6.91132 19.9291 7.15501C20.0091 7.3987 20.0188 7.65975 19.957 7.90861C19.8952 8.15747 19.7644 8.38422 19.5795 8.56319L15.7924 12.2249L16.6861 17.3925C16.7295 17.645 16.7009 17.9045 16.6035 18.1417C16.506 18.3789 16.3436 18.5843 16.1347 18.7347C15.9257 18.8852 15.6784 18.9747 15.4209 18.9931C15.1633 19.0115 14.9057 18.9581 14.6772 18.8389L9.9979 16.4008L5.31863 18.8419C5.08982 18.9614 4.83186 19.0149 4.57396 18.9964C4.31606 18.9779 4.06854 18.8882 3.85944 18.7373C3.65034 18.5864 3.48801 18.3805 3.39086 18.1428C3.2937 17.9051 3.26559 17.6452 3.30972 17.3925L4.20188 12.2249L0.417861 8.56472C0.232931 8.38584 0.102143 8.15922 0.0402842 7.91047C-0.0215745 7.66172 -0.0120364 7.40077 0.06782 7.15711C0.147676 6.91346 0.294666 6.69682 0.492169 6.5317C0.689671 6.36658 0.92981 6.25956 1.18543 6.22274L6.41538 5.46903L8.75656 0.766771V0.765246Z"
        fill={color || '#121212'}
      />
    </Svg>
  );
};
