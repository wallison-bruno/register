import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Header,
  Title,
  Subtitle,
  Form,
  ButtonsTransactions,
  ContainerScroll,
} from "./styles";

import { Button } from "../../components/Form/Button";
import {
  Keyboard,
  Modal,
  View,
  TouchableWithoutFeedback,
  Alert,
  StatusBar,
  StyleSheet,
} from "react-native";
import { ButtonTransaction } from "../../components/Form/ButtonTransaction";
import { SelectButton } from "../../components/Form/SelectButton";
import { Graduations } from "../Graduations";
import { InputControle } from "../../components/Form/InputControler/inde";

import { useNavigation } from "@react-navigation/native";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";
import Checkbox from "../../components/Form/CheckBoox";

const storegeKey = "@gofinacens:Transactons";

export function Seizures() {
  interface Form {
    name: string;
    amount: string;
  }

  const navigation = useNavigation();

  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransacationType] = useState("");

  const [category, setCategory] = useState({
    key: "category",
    name: "Posto / Graduação",
  });

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

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  async function handleRegister(form: Form) {
    const newReport = {};
    try {
      const allReports = await AsyncStorage.getItem(storegeKey);
      const currentReports = allReports ? JSON.parse(allReports) : [];

      const reports = [...currentReports, newReport];

      await AsyncStorage.setItem(storegeKey, JSON.stringify(reports));

      // Redirecionando para alguma screen.
      // navigation.navigate("Listagem");
    } catch (erro) {
      console.log(erro);
      Alert.alert("Não foi possível cadastrar");
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
    marginTop: 10,
  },
});
