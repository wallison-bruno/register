import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

interface CheckboxProps {
  isChecked: boolean;
}

export const CheckboxContainer = styled(TouchableOpacity)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  border-radius: ${RFValue(5)}px;
  padding: ${RFValue(18)}px;
  margin-bottom: ${RFValue(8)}px;
`;

export const CheckboxIcon = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: ${RFValue(8)}px;
`;

export const CheckboxLabel = styled.Text<CheckboxProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.title : theme.colors.text};
`;
