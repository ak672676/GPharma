import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

import ItemComponent from "../components/ItemComponent";

export default function MedicineScreen({ navigation }) {
  const medicines = [
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoHb9oMqDZcos9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: false,
      company: "aristo",
      id: "qmIoHb9oMqascoh9zC1R",
      item: "Aristosyme",
      category: "syrup",
      mrp: 100.0,
      rate: 79.15,
      packing: "200ml",
      photos: ["https://meds.myupchar.com/16/157947_aristo.jpg"],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoHb9oMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoHb9oMqDsZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoaaHb9oMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qqmIoHb9oMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoHb9oMqDZcoh9adzC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: false,
      company: "lupin",
      id: "qmIoHb9qdqoMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: true,
      company: "lupin",
      id: "qmIoHbqsqs9oMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
    {
      availableToCustomer: false,
      company: "lupin",
      id: "qmIdwoHb9oMqDZcoh9zC1R",
      item: "Rablet 20",
      category: "tab",
      mrp: 110.89,
      rate: 89.09,
      packing: "1*10",
      photos: [
        "https://newassets.apollo247.com/pub/media/catalog/product/r/a/rab1097_4.jpg",
        "https://5.imimg.com/data5/NK/BA/JA/SELLER-91382494/rabiet-20-mg-500x500.jpg",
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <Text>Medicine Screen</Text>

      <FlatList
        data={medicines}
        renderItem={(med) => (
          <ItemComponent medicine={med.item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => item.id}
        style={{ width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
});
