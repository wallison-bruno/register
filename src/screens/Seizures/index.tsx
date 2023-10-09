import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Container, Header, Title, Subtitle, Form, ContainerScroll } from "./styles";
import { InputControle } from "../../components/Form/InputControler/inde";
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
import { useOccorrence } from "../../hook/useOccurrence";

const storegeKey = "@gofinacens:Transactons";

export function Seizures() {
  const { handleSeizures } = useOccorrence();  

  const [armasIsChecked, setArmasIsChecked] = useState(false);
  const [drogaIsChecked, setDrogaIsChecked] = useState(false);
  const [veiculosIsChecked, setVeiculosIsChecked] = useState(false);
  const [outrosIsChecked, setOutrosIsChecked] = useState(false);

  function handleDroga() {
    setDrogaIsChecked(!drogaIsChecked);
  }
  function handleArmas() {
    setArmasIsChecked(!armasIsChecked);
  }
  function handleVeiculos() {
    setVeiculosIsChecked(!veiculosIsChecked);
  }
  function handleOutros() {
    setOutrosIsChecked(!outrosIsChecked);
  }

  const schema = yup
    .object({
      descricao: yup.string().required("A descrição dos objetos são obrigatórias"),

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

  async function handleRegister( form: yup.AnyObject) {
      const newSeizures = {
        descricao: form.descricao,
        objetos: {
          armas: armasIsChecked,
          drogas: drogaIsChecked,
          veiculos: veiculosIsChecked,
          outros: outrosIsChecked
        }
      }
    handleSeizures(newSeizures);

    try {
    } catch (erro) {
      Alert.alert("Não foi possível registrar");
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content"/>
        <Header>
          <Title>Apreensões</Title>
        </Header>
        <Form>
          <ContainerScroll>
          <Subtitle>Objetos apreendidos</Subtitle>
          <Checkbox label="Armas"    key={"armas"}  onPress={handleArmas}  isChecked={armasIsChecked}/>
          <Checkbox label="Drogas"   key={"drogas"} onPress={handleDroga} isChecked={drogaIsChecked}/>
          <Checkbox label="Veículos" key={"veiculo"} onPress={handleVeiculos}  isChecked={veiculosIsChecked}/>
          <Checkbox label="Outros"   key={"outros"}  onPress ={ handleOutros} isChecked={outrosIsChecked} />
          
          <Subtitle>Informações dos objetos</Subtitle>
            <InputControle
              placeholder="Exemplo: 01 pistola, número 12345, 30 munições; 01 moto..."
              name="descricao"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.descricao && errors.descricao.message}
              multiline
              editable
              style={styles.textCase}
            />
            </ContainerScroll>
          <Button
            title="Próximo (3/3)"
            style={styles.button}
            onPress={handleRegister}
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
