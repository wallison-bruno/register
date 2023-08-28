import React from "react";
import { Input } from "../Input";
import { TextInputProps } from "react-native";
import { MaskInputProps } from "react-native-mask-input";

import { Control, Controller } from "react-hook-form";
import { TextInputMaskProps } from "react-native-masked-text";
import { Container, Error } from "./styled";

interface Props extends MaskInputProps {
  name: string;
  control: Control;
  error: any;
}

export function InputControle({ name, control, error, ...rest }: Props) {
  return (
    <Container>
      {error && <Error> {error} </Error>}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
    </Container>
  );
}
