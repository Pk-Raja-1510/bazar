import React, { ReactNode } from "react";
import { StyleProp, StyleSheet, View,Text, ViewStyle, TouchableOpacity } from "react-native";

interface ForgetCardProps {
  icon: ReactNode;
  style?: StyleProp<ViewStyle>;
  title:string;
  subTitle:string;
  isSelected?: boolean;
  onPress?:()=>void
}

const ForgetCard: React.FC<ForgetCardProps> = ({ icon, style,title,subTitle,isSelected,onPress }) => {
  const borderColor = isSelected ? '#54408C' : '#FAFAFA';
  return (
    <TouchableOpacity style={[styles.container, style,{borderColor}]} onPress={onPress}>
      <View style={{marginVertical:12,marginLeft:12}}>{icon}</View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:'47%',
    height: 151,
    padding: 16,
    display: 'flex',
    gap: 16,
    backgroundColor: '#FAFAFA',
    borderRadius:8,
    borderWidth:1
  },
  title:{
    color:'#121212',
    fontFamily: 'Roboto',
    fontSize:14,
    fontWeight:'500',
    lineHeight:19.6
  },
  subTitle:{
    color:'#A6A6A6',
    fontFamily: 'Roboto',
    fontSize:14,
    fontWeight:'400',
    lineHeight:19.6
  }
});

export default ForgetCard;

