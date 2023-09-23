import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroud};
`;

export const ContainerScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  width: 100%;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(105)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secundary};
  font-size: ${RFValue(30)}px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${RFValue(15)}px;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Form = styled.View`
  flex: 1;
  width: 100%;
  padding: 24px;
  margin-top: -24px;
  justify-content: space-between;
`;

export const ButtonsTransactions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px;
`;
