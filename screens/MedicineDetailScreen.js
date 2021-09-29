import React, { useState, useCallback, useRef } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image, Divider, Icon } from "react-native-elements";
import Carousel from "react-native-snap-carousel";

import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function MedicineDetailScreen({ route, navigation }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselItems, setCarouselItems] = useState(
    route.params.medicine.photos
  );
  const [medicine, setMedicine] = useState(route.params.medicine);
  const ref = useRef(null);

  console.log(route.params.medicine);
  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          height: SIZES.height * 0.35,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.white,
        }}
      >
        <Image source={{ uri: item }} style={{ width: 300, height: 300 }} />
      </View>
    ),
    []
  );

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          height: SIZES.height * 0.45,
          backgroundColor: COLORS.white,
          borderRadius: 20,
          paddingHorizontal: 10,
          marginTop: 5,
          backgroundColor: COLORS.white,
        }}
      >
        <Carousel
          layout="default"
          ref={ref}
          data={carouselItems}
          sliderWidth={SIZES.width}
          itemWidth={SIZES.width - 10}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          style={{ alignItems: "center", justifyContent: "center" }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontFamily: "roboto-medium", fontSize: 30 }}>
              {medicine.item.toUpperCase()}
            </Text>
            <Text
              style={{
                fontFamily: "roboto-medium",
                fontSize: 30,
                marginLeft: 5,
                
              }}
            >
              {medicine.category.toUpperCase()}
            </Text>
          </View>
          <Icon name="plus" type="evilicon" color={COLORS.primary} size={45} />
        </View>
      </View>
      {/* <Divider
        style={{
          backgroundColor: COLORS.gray,
          height: 2,
          marginHorizontal: 5,
        }}
      /> */}
      <View
        style={{
          backgroundColor: COLORS.white,
          marginTop: 10,
          paddingHorizontal: 10,
        }}
      >
        <Text>aaaaaa</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    paddingHorizontal: 10,
  },
});
