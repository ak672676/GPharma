import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MedicineScreen from "./MedicineScreen";
import MedicineDetailScreen from "./MedicineDetailScreen";

const Stack = createStackNavigator();
export default function MedicineNav() {
  return (
    <Stack.Navigator initialRouteName="MedicineScreen">
      <Stack.Screen
        name="MedicineScreen"
        component={MedicineScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MedicineDetail"
        component={MedicineDetailScreen}
        options={{
          headerShown: true,
          title: "Back",
        }}
      />
    </Stack.Navigator>
  );
}
