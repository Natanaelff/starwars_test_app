import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;

  padding: ${RFValue(20)}px;

  align-items: center;
  justify-content: center;

  background-color: ${({theme}) => theme.colors.background};
`;

export const ViewLabel = styled.View`
  margin-bottom: ${RFValue(30)}px;
`;

export const TextLabel = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.bold};

  color: ${({theme}) => theme.colors.text};
`;
