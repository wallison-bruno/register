import React, { useState } from "react";
import { CheckboxContainer, CheckboxIcon, CheckboxLabel } from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/theme";
import { TouchableOpacityProps } from "react-native";
interface CheckboxProps extends TouchableOpacityProps {
  label: string;
  isChecked: boolean;
  
}

const Checkbox: React.FC<CheckboxProps> = ({ label, isChecked, ...rest }) => {

  return (
    <CheckboxContainer  delayLongPress={100} {...rest} >
      <CheckboxIcon>
        {isChecked ? (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={RFValue(20)}
            color={theme.colors.secundary}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={RFValue(20)}
            color={theme.colors.text}
          />
        )}
      </CheckboxIcon>
      <CheckboxLabel isChecked={isChecked}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
