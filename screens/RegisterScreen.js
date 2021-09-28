import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ToastAndroid } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";
import { Input } from "react-native-elements";

import * as firebase from "firebase";

export default function RegisterScreen({ navigation, route }) {
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  const saveUserDetail = () => {
    const { uid, number } = route.params.data;
    const db = firebase.firestore();

    // db.collection("users")
    //   .doc(uid)
    //   .set(
    //     {
    //       phone: number,
    //       id: uid,
    //       shopName: shopName,
    //       ownerName: ownerName,
    //     },
    //     { merge: true }
    //   )
    //   .then(() => {
    //     ToastAndroid.show("Successfully REgistered", ToastAndroid.SHORT);
    //     navigation.navigate("Main", { data: { uid, number } });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    navigation.navigate("Main", { data: { uid, number } });

    console.log("save user detail");
  };

  const skipAddingDetail = () => {
    console.log(route.params);
    console.log("skip user detail");
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontFamily: "roboto-light",
          color: COLORS.primary,
          fontSize: SIZES.h1,
          marginTop: 50,
        }}
      >
        Register Yourself
      </Text>
      <View style={styles.formContainer}>
        <Input
          placeholder="Shop Name"
          onChangeText={setShopName}
          leftIcon={{
            type: "fontisto",
            name: "shopping-store",
            color: COLORS.primary,
          }}
          inputContainerStyle={{ borderColor: COLORS.primary }}
        />
        <Input
          placeholder="Owner Name"
          onChangeText={setOwnerName}
          leftIcon={{
            type: "ionicon",
            name: "person-outline",
            color: COLORS.primary,
          }}
          inputContainerStyle={{ borderColor: COLORS.primary }}
        />
        <View style={{ flexDirection: "row" }}>
          <View style={{ marginHorizontal: 20, width: "30%" }}>
            <Button
              title="Save"
              color={COLORS.primary}
              disabled={!shopName || !ownerName}
              onPress={saveUserDetail}
            />
          </View>
          <View style={{ marginHorizontal: 20, width: "30%" }}>
            <Button
              title="Skip"
              color={COLORS.primary}
              onPress={skipAddingDetail}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLORS.white,
  },
  formContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 40,
    width: "70%",
  },
});
