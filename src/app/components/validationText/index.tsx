import {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface ValidationTextProps {
  children?: ReactNode;
  text: string;
  style?: StyleProp<ViewStyle>;
}

const ValidationText: React.FC<ValidationTextProps> = ({
  children,
  text,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    marginBottom: 8,
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 16.9,
    fontWeight: '400',
    fontFamily: 'open sans',
    color: '#A6A6A6',
  },
});
export default ValidationText;
