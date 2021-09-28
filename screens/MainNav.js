import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

import MainScreen from "./MainScreen";
import MedicineScreen from "./MedicineScreen";
import ProfileScreen from "./ProfileScreen";
import OrderBookScreen from "./OrderBookScreen";
import MedicineDetailScreen from "./MedicineDetailScreen";
import MedicineNav from "./MedicineNav";

import { COLORS } from "../constants";

const Tab = createBottomTabNavigator();

export default function MainNav() {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MedicineNav"
        component={MedicineNav}
        options={{
          headerShown: false,
          tabBarLabel: "Medicine",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="medicinebox" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="OrderBookScreen"
        component={OrderBookScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Feather name="book-open" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Order",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="face-profile"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
