import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { TextInputMaskProps } from 'react-native-masked-text';

type Props = TextInputMaskProps;

export function Input({ ...rest }: Props) {
    return (
        <Container {...rest} />
    )
}