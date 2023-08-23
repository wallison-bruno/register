import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
export const Container = styled.View`
  width: 100%;
`;

export const Error = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.anttencion};
  font-size: ${RFValue(14)}px;
  margin: 7px 0px;
`;
