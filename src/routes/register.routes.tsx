import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { Information } from "../screens/Information";
import { Patrolling } from "../screens/Patrolling";
import { Seizures } from "../screens/Seizures";
const { Navigator, Screen } = createStackNavigator();

export type RootStackParamsList = {
  Seizures: undefined;
  Information: undefined;
  Patrolling: undefined;
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
