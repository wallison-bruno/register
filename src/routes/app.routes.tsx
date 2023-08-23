import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RFValue } from "react-native-responsive-fontsize";
import { MaterialIcons } from "@expo/vector-icons";
import RegisterRouts from "./register.routes";
import { useTheme } from "styled-components";
import { User } from "../screens/User";
export default function AppRouts() {
  const Tab = createBottomTabNavigator();
  const theme = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Ocorrência") {
            return (
              <MaterialIcons name={"note-add"} size={size} color={color} />
            );
          } else if (route.name === "Perfil") {
            return <MaterialIcons name={"person"} size={size} color={color} />;
          } else if (route.name === "Rascunhos") {
            return <MaterialIcons name={"notes"} size={size} color={color} />;
          }
        },
        tabBarActiveTintColor: theme.colors.secundary,
        tabBarInactiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
          fontFamily: theme.fonts.regular,
          fontSize: RFValue(13),
        },
        tabBarStyle: {
          height: RFValue(80),
          paddingLeft: RFValue(24),
        },
      })}
    >
      <Tab.Screen name="Ocorrência" component={RegisterRouts} />
      <Tab.Screen name="Rascunhos" component={User} />
      <Tab.Screen name="Perfil" component={User} />
    </Tab.Navigator>
  );
}
