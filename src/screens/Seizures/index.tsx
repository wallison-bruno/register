import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Header, Title, Subtitle, Form } from "./styles";

import { Button } from "../../components/Form/Button";
import {
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
  StatusBar,
  StyleSheet,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import Checkbox from "../../components/Form/CheckBoox";

const storegeKey = "@gofinacens:Transactons";

export function Seizures() {
  interface Form {
    name: string;
    amount: string;
  }

  const schema = yup
    .object({
      name: yup.string().required("Nome é obrigatório"),
      amount: yup
        .number()
        .typeError("Informe apenas valores numéricos")
        .positive("O valor não pode ser negativo")
        .required("O valor é obrigatório"),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<yup.AnyObject>(schema),
  });

  async function handleRegister(form: Form) {
    try {
    } catch (erro) {
      Alert.alert("Não foi possível registrar");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <Title>Apreensões</Title>
        </Header>
        <Form>
          <Subtitle>Selecione os itens apreendidos</Subtitle>
          <Checkbox label="Armas" key={"armas"} />
          <Checkbox label="Veículos" key={"veiculo"} />
          <Checkbox label="Drogas" key={"drogas"} />
          <Checkbox label="Outros" key={"outros"} />
          <Button
            title="Próximo (3/3)"
            style={styles.button}
            onPress={() => {}}
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  textCase: {
    height: 220,
  },
  button: {
    marginTop: 8,
  },
});
