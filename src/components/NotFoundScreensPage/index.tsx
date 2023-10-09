import React from "react";
import { Container, Subtitle, TextPage } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";


export function NotFoundScreensPage () {
    return(
    <Container>
    <MaterialIcons name={"error-outline"} size={60} />
      <Subtitle>Página indisponível no momento!</Subtitle>
      <TextPage>Esta página está em desenvolvimento ou em uma possível manutemção. Por favor, aguarde atualizações.</TextPage>
    </Container>
    );
}