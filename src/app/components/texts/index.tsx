import {StyleSheet, Text, View} from 'react-native';

interface TextsProps {
  title: string;
  content: string;
  style?: object;
  span?: string;
  contentStyle?: object;
}

const Texts: React.FC<TextsProps> = ({
  title,
  content,
  style,
  span,
  contentStyle,
}) => {
  return (
    <View style={style}>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={{...styles.content, ...contentStyle}}>
        {content}
        <Text style={styles.span}>{span}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: '#121212',
    fontSize: 24,
    fontFamily: 'open sans',
    fontWeight: '700',
    lineHeight: 32,
    marginBottom: 8,
  },
  content: {
    color: '#A6A6A6',
    fontSize: 16,
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 24,
  },
  span: {
    color: '#121212',
    fontSize: 16,
    fontFamily: 'roboto',
    fontWeight: '400',
    lineHeight: 24,
  },
});

export default Texts;
