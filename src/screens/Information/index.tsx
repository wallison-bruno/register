import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  Title,
  Header,
  Subtitle,
  Container,
  ButtonsTransactions,
  ContainerScroll,
} from "./styles";

import {
  View,
  Modal,
  Alert,
  Keyboard,
  StatusBar,
  StyleSheet,
  TouchableWithoutFeedback,
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
    numeroOrrencia: number;
    delegacia: string;
    endereco:string;
    data: string;
    local:string;
    ais:string;
    relato: string;
  }

  const navigation = useNavigation<InformationScreenProps>();

  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransacationType] = useState("");

  const [category, setCategory] = useState({
    key: "category",
    name: "Posto / Graduação",
  });

  const schema = yup
    .object().shape({
      numeroOcorrencia: yup
      .number()
      .typeError("Informe apenas valores numéricos")
      .positive("O valor não pode ser negativo")
      .required("O número é obrigatório"),
      delegacia: yup.string().required("A delegacia é obrigatória"),
      endereco:  yup.string().required("Endereço é obrigatório"),
      data: yup.string().required("A data é obrigatória"),
      ais: yup.string().required("A Ais é obrigatória"),
      relato:yup.string().required("O reláto é obrigatório"),
    })

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver<yup.AnyObject>(schema),
  });


  async function handleResgister(form: yup.AnyObject) {
  
    const newTransiction = {
      id: uuid.v4(),
      numeroOcorrencia: form.numeroOrrencia,
      data:  form.data,
      delegacia: form.delegacia,
      endereco: form.delegacia,
      ais: form.ais,
      relato: form.relato,
    };

    /*try {
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
      navigation.navigate("Listagem");
    } catch (erro) {
      console.log(erro);
      Alert.alert("Não foi possível cadastrar");
    }*/
    navigation.navigate("Patrolling");
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
              type="only-numbers"           
              placeholder="(M) da Ocorrência"
              name="numeroOcorrencia"
              control={control}
              keyboardType="numeric"
              autoCorrect={false}
              error={errors.numeroOcorrencia && errors.numeroOcorrencia.message} 
            />
            <InputControle
              type="custom"            
              placeholder="Delegacia"
              name="delegacia"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.delegacia && errors.delegacia.message}
            />
            <InputControle
            
              type='datetime'
              placeholder="Data"
              options={{
                format: 'DD/MM/YYYY'
              }}
              name="data"
              control={control}
              keyboardType="numeric"
              autoCorrect={false}
              error={errors.data && errors.data.message}
            />
            <Subtitle>Local</Subtitle>
            <InputControle
            type="custom"
              placeholder="Endereço"
              name="endereco"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.endereco && errors.endereco.message}
            />
            <InputControle
            type="custom"
              placeholder="AIs"
              name="ais"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.ais && errors.ais.message}
            />
            <Subtitle>Relato da ocorrência</Subtitle>
            <InputControle
            type="custom"
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
            onPress={handleSubmit(handleResgister)} 
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
