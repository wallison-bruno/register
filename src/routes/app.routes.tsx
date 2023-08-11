import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Patrolling } from "../screens/Patrolling";
import { User } from "../screens/User";
import { useTheme } from "styled-components";
import RegisterRouts from "./register.routes";
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
          fontSize: 16,
        },
        tabBarStyle: {
          height: 68,
          paddingLeft: 16,
        },
      })}
    >
      <Tab.Screen name="Ocorrência" component={RegisterRouts} />
      <Tab.Screen name="Rascunhos" component={User} />
      <Tab.Screen name="Perfil" component={User} />
    </Tab.Navigator>
  );
}
