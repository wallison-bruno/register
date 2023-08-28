import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
//import { TextInputMask} from 'react-native-masked-text';
import MaskInput from "react-native-mask-input";
export const Container = styled(MaskInput)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  border-radius: 5px;
  padding: ${RFValue(14)}px;
  margin-bottom: ${RFValue(8)}px;
`;
