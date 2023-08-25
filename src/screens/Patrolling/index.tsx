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
import { RootStackParamsList } from "../../routes/register.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type InformationScreenProps = NativeStackNavigationProp<
  RootStackParamsList,
  "Patrolling"
>;

const storegeKey = "@gofinacens:Transactons";

export function Patrolling() {
  interface Form {
    name: string;
    amount: string;
  }

  const navigation = useNavigation<InformationScreenProps>();

  const [openModal, setOpenModal] = useState(false);
  const [openModalMot, setOpenModalMot] = useState(false);
  const [openModalCmd, setOpenModalCmd] = useState(false);
  
  const [transactionType, setTransacationType] = useState("");

  const [category, setCategory] = useState({
    key: "category",
    name: "Posto / Graduação",
  });

  const [categoryMot, setCategoryMot] = useState({
    key: "category",
    name: "Posto / Graduação",
  });

  const [categoryCmd, setCategoryCmd] = useState({
    key: "category",
    name: "Posto / Graduação",
  });

  const qra = yup.string().required("Nome de guerra é obrigatório")
  const number =  yup
  .number()
  .typeError("Informe apenas valores numéricos")
  .positive("O valor não pode ser negativo")
  .required("O valor é obrigatório")

  const schema = yup
    .object({
      vtr: yup.string().required('Título da VTR é obrigatório'),
      qracmd: qra,
      numcmd: number,
      qrapat: qra,
      numpat: number,
      qramot: qra,
      nummot: number, 
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

  function handleOpenModalMot() {
    setOpenModalMot(true);
  }

  function handleOpenModalCmd() {
    setOpenModalCmd(true);
  }

  function handleCloseModal() {
    setOpenModal(false);
    setOpenModalMot(false);
    setOpenModalCmd(false);
  }

  async function handleResgiter(form: yup.AnyObject) {
      navigation.navigate('Seizures')
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar barStyle="light-content" />
        <Header>
          <Title>Patrulhamento</Title>
        </Header>
        <Form>
          <ContainerScroll>
            <Subtitle>Viatura</Subtitle>
            <InputControle
              placeholder="VTR"
              name="vtr"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.vtr && errors.vtr.message}
            />
            <Subtitle>Comandante</Subtitle>
            <InputControle
              placeholder="QRA"
              name="qracmd"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.qracmd && errors.qracmd.message}
            />
            <InputControle
              placeholder="Numeral"
              name="numcmd"
              control={control}
              keyboardType="numeric"
              error={errors.numcmd && errors.numcmd.message}
            />

            <SelectButton onPress={handleOpenModalCmd} title={categoryCmd.name} />
            <Modal visible={openModalCmd}>
              <Graduations
                category={categoryCmd}
                setCategory={setCategoryCmd}
                selectCatergoryClose={handleCloseModal}
              />
            </Modal>

            <Subtitle>Motorista</Subtitle>
            <InputControle
              placeholder="QRA"
              name="qramot"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.qramot && errors.qramot.message}
            />
            <InputControle
              placeholder="Numeral"
              name="nummot"
              control={control}
              keyboardType="numeric"
              error={errors.nummot && errors.nummot.message}
            />

            <SelectButton onPress={handleOpenModalMot} title={categoryMot.name} />

            <Modal visible={openModalMot}>
              <Graduations
                category={categoryMot}
                setCategory={setCategoryMot}
                selectCatergoryClose={handleCloseModal}
              />
            </Modal>
            <Subtitle>Patrulehiro</Subtitle>
            <InputControle
              placeholder="QRA"
              name="qrapat"
              control={control}
              keyboardType="default"
              autoCorrect={false}
              error={errors.qrapat && errors.qrapat.message}
            />
            <InputControle
              placeholder="Numeral"
              name="numpat"
              control={control}
              keyboardType="numeric"
              error={errors.numpat && errors.numpat.message}
            />
            <SelectButton onPress={handleOpenModal} title={category.name} />
            <Modal visible={openModal}>
              <Graduations
                category={category}
                setCategory={setCategory}
                selectCatergoryClose={handleCloseModal}
              />
            </Modal>
          </ContainerScroll>
          <Button
            title="Próximo (2/3)"
            style={styles.button}
            onPress={handleSubmit(handleResgiter)}
          />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  button: {
    marginTop: 10,
  },
});
