import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Information } from "../screens/Information";
import { Patrolling } from "../screens/Patrolling";
const { Navigator, Screen } = createStackNavigator();

export default function RegisterRouts() {
  return (
    <Navigator
      initialRouteName={"Information"}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Information" component={Information} />
      <Screen name="Patrolling" component={Patrolling} />
    </Navigator>
  );
}
