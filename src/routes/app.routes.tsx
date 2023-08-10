import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import { Home } from "../screens/Home";
import { Information } from "../screens/informarion";
import { useTheme } from "styled-components";


export default function AppRouts() {
    const Tab = createBottomTabNavigator();
    const theme = useTheme();
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    if (route.name === 'Ocorrência') {
                        return <MaterialIcons name={"format-list-bulleted"} size={size} color={color} />
                    } else if (route.name === 'Perfil') {
                        return <MaterialIcons name={"person"} size={size} color={color} />
                    } else if (route.name === 'Resumo') {
                        return <MaterialIcons name={"pie-chart"} size={size} color={color} />
                    }
                },
                tabBarActiveTintColor: theme.colors.secundary,
                tabBarInactiveTintColor: theme.colors.primary,
                headerShown: false,
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontFamily: theme.fonts.regular,
                    fontSize: 16,
                },
                tabBarStyle: {
                    height: 68,
                    paddingLeft: 16,
                }
            })}
        >
            <Tab.Screen name="Ocorrência" component={Information} />
            <Tab.Screen name="Perfil" component={Home} />
            <Tab.Screen name="Resumo" component={Home} />
        </Tab.Navigator>
    );
}
