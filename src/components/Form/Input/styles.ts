import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { TextInputMask} from 'react-native-masked-text';
export const Container = styled(TextInputMask)`
    width: 100%;
    background-color:${({ theme }) => theme.colors.shape};
    color:${({ theme }) => theme.colors.text} ;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size:  ${RFValue(14)}px;
    border-radius: 5px;
    padding:${RFValue(14)}px;
    margin-bottom:  ${RFValue(8)}px;
`;