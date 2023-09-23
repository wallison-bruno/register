import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Title,
  Header,
  Subtitle,
  Container,
  ContainerScroll,
} from "./styles";

import {
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { InputControle } from "../../components/Form/InputControler/inde";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Form/Button";
import { Masks } from "react-native-mask-input";
import { useOccorrence } from "../../hook/useOccurrence";
import uuid from "react-native-uuid";
import * as yup from "yup";
import { RootStackParamsList } from "../../routes/register.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type InformationScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  "Information"
>;

export function Information() {
  const { handleInformation } = useOccorrence();
  const navigation = useNavigation<InformationScreenProps>();

  const schema = yup.object().shape({
    numeroOcorrencia: yup
      .number()
      .typeError("Informe apenas valores numéricos")
      .positive("O valor não pode ser negativo")
      .required("O número é obrigatório"),
    delegacia: yup.string().required("A delegacia é obrigatória"),
    endereco: yup.string().required("Endereço é obrigatório"),
    data: yup.string().required("A data é obrigatória"),
    ais: yup.string().required("A Ais é obrigatória"),
    relato: yup.string().required("O relato é obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<yup.AnyObject>(schema),
  });

  function handleRegisterInformation(form: yup.AnyObject) {
    const idReport = uuid.v4();

    const newReport = {
      id: idReport,
      numeroOcorrencia: form.numeroOcorrencia,
      data: form.data,
      delegacia: form.delegacia,
      endereco: form.delegacia,
      ais: form.ais,
      relato: form.relato,
    };

    handleInformation(newReport);
    navigation.navigate("Patrolling");
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <Title>Informações</Title>
        </Header>
        <Form>
          <ContainerScroll>
            <Subtitle>Informações da Ocorrência</Subtitle>
            <InputControle
              placeholder="(M) da Ocorrência"
              name="numeroOcorrencia"
              control={control}
              keyboardType="numeric"
              autoCorrect={false}
              error={errors.numeroOcorrencia && errors.numeroOcorrencia.message}
            />
            <InputControle
              placeholder="Delegacia"
              name="delegacia"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.delegacia && errors.delegacia.message}
            />
            <InputControle
              mask={Masks.DATE_DDMMYYYY}
              placeholder="Data"
              name="data"
              control={control}
              keyboardType="numeric"
              autoCorrect={false}
              error={errors.data && errors.data.message}
            />
            <Subtitle>Local</Subtitle>
            <InputControle
              placeholder="Endereço"
              name="endereco"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.endereco && errors.endereco.message}
            />
            <InputControle
              placeholder="AIs"
              name="ais"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.ais && errors.ais.message}
            />
            <Subtitle>Relato da ocorrência</Subtitle>
            <InputControle
              placeholder="Texto"
              name="relato"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.relato && errors.relato.message}
              multiline
              editable
              style={styles.textCase}
            />
          </ContainerScroll>
          <Button
            title="Próximo (1/3)"
            style={styles.button}
            onPress={handleSubmit(handleRegisterInformation)}
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
