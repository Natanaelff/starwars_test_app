import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  width: 100%;

  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(80)}px 0;
  background-color: ${({theme}) => theme.colors.black};
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;
  font-family: ${({theme}) => theme.fonts.bold};

  color: ${({theme}) => theme.colors.text};
`;

export const ViewButton = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${RFValue(50)}px;
`;

export const Button = styled(RectButton)`
  width: 90%;
  height: auto;

  align-items: center;
  justify-content: center;

  padding-top: ${RFValue(10)}px;
  padding-bottom: ${RFValue(10)}px;

  border-radius: ${RFValue(20)}px;

  background-color: ${({theme}) => theme.colors.background_secundary};
`;

export const ButtonTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.medium};

  color: ${({theme}) => theme.colors.text};
`;