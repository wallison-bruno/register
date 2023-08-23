import React, { useState } from "react";
import { CheckboxContainer, CheckboxIcon, CheckboxLabel } from "./styled";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../../global/theme";
interface CheckboxProps {
  label: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer onPress={toggleCheckbox} delayLongPress={100}>
      <CheckboxIcon>
        {isChecked ? (
          <MaterialCommunityIcons
            name="checkbox-marked-circle"
            size={RFValue(26)}
            color={theme.colors.secundary}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={RFValue(26)}
            color={theme.colors.text}
          />
        )}
      </CheckboxIcon>
      <CheckboxLabel isChecked={isChecked}>{label}</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
