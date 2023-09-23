import React from "react";
//Theme
import { ThemeProvider } from "styled-components";
//import { AuthProvider } from "./src/hook/auth";
import theme from "./src/global/theme";
import { Routs } from "./src/routes";
import { OccorrenceProvider } from "./src/hook/useOccurrence";
//Loading for fonts
//import AppLoading from 'expo-app-loading';

//Fonts
/*import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";*/

//import { Routs } from "./src/routes"

//Start App
export default function App() {
  /*let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });
  */

  return (
    <ThemeProvider theme={theme}>
      <OccorrenceProvider>
        <Routs />
      </OccorrenceProvider>
    </ThemeProvider>
  );
}
