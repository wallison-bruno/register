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

import {
  Keyboard,
  Modal,
  View,
  TouchableWithoutFeedback,
  Alert,
  StatusBar,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { InputControle } from "../../components/Form/InputControler/inde";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Form/Button";
import uuid from "react-native-uuid";
import * as yup from "yup";

import { RootStackParamsList } from "../../routes/register.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type InformationScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  "Information"
>;

const storegeKey = "@gofinacens:Transactons";

export function Information() {
  interface Form {
    name: string;
    amount: string;
  }

  const navigation = useNavigation<InformationScreenProps>();

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

  function handleTransactionsTaypeSelect(type: "up" | "down") {
    setTransacationType(type);
  }

  function handleOpenModal() {
    setOpenModal(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
  }

  async function handleResgiter(form: Form) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação.");
    }
    if (category.key === "category") {
      return Alert.alert("Selecione a categoria.");
    }
    const newTransiction = {
      id: uuid.v4(),
      date: new Date(),
      name: form.name,
      amount: form.amount,
      category: category.key,
      type: transactionType,
    };

    try {
      const allTransacations = await AsyncStorage.getItem(storegeKey);
      const currentTransacations = allTransacations
        ? JSON.parse(allTransacations)
        : [];

      const transactions = [...currentTransacations, newTransiction];

      await AsyncStorage.setItem(storegeKey, JSON.stringify(transactions));

      reset();
      setTransacationType("");
      setCategory({
        key: "category",
        name: "Categoria",
      });
      // Redirecionando para screen de Dashborad.
      //navigation.navigate("Listagem");
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
          <Title>1ªCIA | BPRE</Title>
        </Header>
        <Form>
          <ContainerScroll>
            <Subtitle>Informações da Ocorrência</Subtitle>
            <InputControle
              placeholder="(M) da Ocorrência"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
            />
            <InputControle
              placeholder="Delegacia"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
            />
            <InputControle
              placeholder="Data"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
            />
            <Subtitle>Local</Subtitle>
            <InputControle
              placeholder="Endereço"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
            />
            <InputControle
              placeholder="AIs"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
            />
            <Subtitle>Relato da ocorrência</Subtitle>
            <InputControle
              placeholder="Texto"
              name="name"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={""}
              multiline
              editable
              style={styles.textCase}
            />
          </ContainerScroll>
          <Button
            title="Próximo (1/3)"
            style={styles.button}
            onPress={() => {
              navigation.navigate("Patrolling");
            }}
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
