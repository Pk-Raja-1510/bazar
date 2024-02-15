import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { StarIcon } from '../icons/StarIcon';

interface StarRatingProps {
  totalStars: number;
  defaultStars?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars, defaultStars = 0 }) => {
  const [selectedStars, setSelectedStars] = useState(defaultStars);

  const handleStarPress = (starIndex: number) => {
    setSelectedStars(starIndex + 1);
  };

  return (
    <View style={styles.container}>
      {[...Array(totalStars)].map((_, index) => (
        <TouchableOpacity key={index} onPress={() => handleStarPress(index)} style={styles.star}>
          {/* <Ionicons
            name={index < selectedStars ? 'star' : 'star-outline'}
            size={24}
            color={index < selectedStars ? '#FFD700' : '#808080'}
          /> */}
          <StarIcon/>
        </TouchableOpacity>
      ))}
      <View style={styles.textContainer}>
        <Text>{selectedStars} / {totalStars} stars selected</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 5,
  },
  textContainer: {
    marginLeft: 10,
  },
});

export default StarRating;
