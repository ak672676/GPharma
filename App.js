import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";

import store from "./redux/store";
import AuthNav from "./screens/AuthNav";

import * as Font from "expo-font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    Font.loadAsync({
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-light": require("./assets/fonts/Roboto-Light.ttf"),
      "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
    });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView
        style={{ flex: 1, paddingTop: Platform.OS === "android" ? 25 : 0 }}
      >
        <AuthNav />
      </SafeAreaView>
    </Provider>
  );
}
