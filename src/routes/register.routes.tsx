import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Information } from "../screens/Information";
import { Patrolling } from "../screens/Patrolling";
import { Seizures } from "../screens/Seizures";
const { Navigator, Screen } = createStackNavigator();

export type RootStackParamsList = {
  Information: undefined;
  Patrolling: undefined;
  Seizures: undefined;
};

export default function RegisterRouts() {
  return (
    <Navigator
      initialRouteName={"Information"}
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Information" component={Information} />
      <Screen name="Patrolling" component={Patrolling} />
      <Screen name="Seizures" component={Seizures} />
    </Navigator>
  );
}
