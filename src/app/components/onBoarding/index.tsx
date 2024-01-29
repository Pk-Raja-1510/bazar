import React from 'react';
import {FlatList, StyleSheet, Image, View, Text} from 'react-native';
import {OnBoardingItem} from '../onBoardingCarousel';
import {ListRenderItem} from 'react-native';

interface OnBoardingProps {
  onBoardingData: OnBoardingItem[];
  index: number;
}

export const OnBoarding: React.FC<OnBoardingProps> = ({
  onBoardingData,
  index,
}) => {
  const renderOnBoardingItem: ListRenderItem<OnBoardingItem> = ({item}) => {
    if (index + 1 === item.id) {
      return (
        <View style={styles.onBoardingItemContainer}>
          <Image source={item.image} style={styles.image} />
          <Text
            style={[
              styles.title,
              {width: item.id === 1 ? 243 : item.id === 2 ? 291 : 243},
            ]}>
            {item.title}
          </Text>
          <Text
            style={[
              styles.content,
              {width: item.id === 1 ? 292 : item.id === 2 ? 285 : 243},
            ]}>
            {item.content}
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  return (
    <FlatList
      data={onBoardingData}
      renderItem={renderOnBoardingItem}
      keyExtractor={item => item.id.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  onBoardingItemContainer: {
    maxWidth: 375,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  image: {
    resizeMode: 'contain',
    marginTop: 13,
    marginBottom: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginVertical: 10,
    color: '#121212',
    fontFamily: 'open sans',
    lineHeight: 32,
    textAlign: 'center',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'roboto',
    color: '#A6A6A6',
    fontWeight: '400',
    lineHeight: 24,
    marginBottom: 30,
  },
});

export default OnBoarding;
