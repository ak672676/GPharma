import React from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Card, Badge, Icon } from "react-native-elements";
import { COLORS, SIZES, FONTS, icons } from "../constants";

export default function PostComponent({ post }) {
  return (
    <Pressable style={styles.container}>
      <Card
        containerStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: "100%",
        }}
      >
        <Image
          source={{ uri: post.imageUrl }}
          style={{ width: "100%", height: 230 }}
        />
        <View>
          <Text style={{ fontSize: 30, fontFamily: "roboto-medium" }}>
            {post.description}
          </Text>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    // justifyContent: "center",
    width: "95%",
    marginHorizontal: 5,
  },
});
