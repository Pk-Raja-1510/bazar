import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

interface LineProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Line: React.FC<LineProps> = ({children, style}) => {
  const LineComponent: React.FC = () => (
    <View
      style={{
        width: '50%',
        height: 1,
        backgroundColor: '#E8E8E8',
      }}
    />
  );

  return (
    <View
      style={[
        style,
        {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        },
      ]}>
      <LineComponent />
      {children}
      <LineComponent />
    </View>
  );
};

export default Line;
