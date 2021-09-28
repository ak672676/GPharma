import React from "react";
import { Pressable, Text, View } from "react-native";
import { Card, Badge, Icon } from "react-native-elements";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function ItemComponent({ medicine, navigation }) {

  const onClickItem = () => {
    console.log("Iten Clicked");
    navigation.navigate("MedicineDetail", { medicine });
  };

  const onAddItemToCart = () => {
    console.log("On Item Press");
  };
  return (
    <Pressable style={{ width: "100%" }} onPress={onClickItem}>
      <Card containerStyle={{ padding: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={{ paddingLeft: 4, fontWeight: "bold" }}>
              {medicine.item.toUpperCase()}
            </Text>
            <Text style={{ paddingLeft: 4, fontWeight: "bold" }}>
              {medicine.category.toUpperCase()}
            </Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {medicine.availableToCustomer ? (
                <Badge
                  value="Available"
                  status="success"
                  badgeStyle={{ padding: 12, marginRight: 10 }}
                />
              ) : (
                <Badge
                  value="NA"
                  status="primary"
                  badgeStyle={{ padding: 12, marginRight: 10 }}
                />
              )}
              <Icon
                name="plus"
                type="evilicon"
                color={COLORS.primary}
                size={45}
                onPress={onAddItemToCart}
              />
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}
{
  /* <Icon name="close" type="evilicon" color="#517fa4" size={45}/> */
}
