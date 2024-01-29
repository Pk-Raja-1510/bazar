import {StyleSheet, Text} from 'react-native';
interface PromptTextProps {
  title: string;
  link: string;
  onPress?: () => void;
  style?: object;
}
const PromptText: React.FC<PromptTextProps> = ({
  title,
  link,
  onPress,
  style,
}) => {
  return (
    <Text style={[styles.promptText, style]}>
      {title}
      <Text onPress={onPress} style={[styles.signUpLink, style]}>
        {link}
      </Text>
    </Text>
  );
};
const styles = StyleSheet.create({
  promptText: {
    color: '#A6A6A6',
    textAlign: 'center',
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    marginTop: 24,
  },
  signUpLink: {
    color: '#54408C',
    textAlign: 'center',
    fontFamily: 'roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
  },
});

export default PromptText;
