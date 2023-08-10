import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native"
import AppRouts from "./app.routes";

export function Routs() {
    
    return (
        <NavigationContainer>
             < AppRouts /> 
        </NavigationContainer>
    )
}