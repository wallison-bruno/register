import React from "react";
import { Container } from "./styles";
//import { TextInputProps } from "react-native";
//import { TextInputMaskProps } from 'react-native-masked-text';
import { MaskInputProps } from "react-native-mask-input";

type Props = MaskInputProps;

export function Input({ ...rest }: Props) {
  return <Container {...rest} />;
}
