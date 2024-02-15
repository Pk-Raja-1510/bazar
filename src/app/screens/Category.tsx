import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NotificationIcon } from "../components/icons/NotificationIcon";
import { SearchIcon } from "../components/icons/SearchIcon";

const Category = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const CategoryFilterData = [
    "All",
    "Novels",
    "Self Love",
    "Science",
    "Romantic",
    "The Good Sister",
    "Carries Fisher",
  ];
  const CategoryData = [
    {
      id: 1,
      image: require("../../../assets/images/category/1.png"),
      name: "The Da vinci Code",
      rate: "$19.99",
    },
    {
      id: 2,
      image: require("../../../assets/images/category/2.png"),
      name: "Carrie Fisher",
      rate: "$27.12",
    },
    {
      id: 3,
      image: require("../../../assets/images/category/3.png"),
      name: "The Good Sister",
      rate: "$30.12",
    },
    {
      id: 4,
      image: require("../../../assets/images/category/4.png"),
      name: "The Waiting",
      rate: "$24.12",
    },
    {
      id: 5,
      image: require("../../../assets/images/category/5.png"),
      name: "Where are you",
      rate: "$22.12",
    },
    {
      id: 6,
      image: require("../../../assets/images/category/6.png"),
      name: "Bright Young Human",
      rate: "$18.12",
    },
  ];
  const handleSelectFilter = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <SearchIcon />
        <Text style={styles.homeText}>Category</Text>
        <NotificationIcon />
      </View>
      <View>
        <FlatList
          data={CategoryFilterData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleSelectFilter(item)}>
              <Text
                style={[
                  styles.filterText,
                  selectedFilter === item && styles.selectedFilter,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          horizontal={true}
          style={{ paddingHorizontal: 24 }}
          keyExtractor={(item) => item.toString()}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <FlatList
        data={CategoryData}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.rate}>{item.rate}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        style={{paddingHorizontal:24,marginTop: 24,marginBottom:80}}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homeText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "opensans",
    lineHeight: 28,
    color: "#121212",
  },
  filterText: {
    marginRight: 20,
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    fontFamily: "opensans",
    color: "#A6A6A6",
  },
  selectedFilter: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 24.3,
    fontFamily: "opensans",
    color: "#121212",
  },
  item: {
    marginRight:20,
    marginTop:10,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 8,
    
  },
  name: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    color:'#121212',
    fontFamily:'roboto'
  },
  rate: {
    fontFamily:'roboto',
    color:'#54408C',
    lineHeight:19.6,
    fontSize: 14,
    fontWeight:'700'
  },
});

export default Category;
